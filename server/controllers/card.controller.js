import fs from 'fs'
import config from 'config'



import Card from "../models/Card.js"
import LessonBlock from "../models/LessonBlock.js"


import CardPromo from "../models/CardPromo.js"
import User from '../models/User.js'
import Lesson from '../models/Lesson.js'
import Comment from '../models/Comment.js'



export const addCard = async (req, res) => {
    try {
        const file = req.file
        const data = req.body
        if (!file.filename) {
            return res.status(401).json({ message: "Не добавлено фото карточки" })
        }
        const card = await new Card({
            title: data.title,
            text: data.text, image: file.filename,
            type: data.type, popular: 0
        })

        const newPromo = await new CardPromo({
            title: data.promoTitle, subtitle: data.promoSubtitle, card: card._id, image: card.image, description: data.description,
            willLearn: data.willLearn, price: data.price
        })
        await card.save()
        await newPromo.save()
        return res.status(201).json({ card, message: 'Карточка успешно создана' })
    } catch (e) {
        return res.status(401).json({ message: "Заполните все поля" })
    }
}
export const removeCard = async (req, res) => {
    try {
        const { id } = req.body
        await CardPromo.findOneAndDelete({ card: id })
        const card = await Card.findOneAndDelete({ _id: id })

        if (card.image) {
            fs.unlinkSync(config.get('staticPath') + '\\' + card.image)
        }

        return res.status(201).json({ message: 'Карточка была удалена' })
    } catch (e) {
        return res.status(401).json({ message: "Не удалось удалить карточку" })
    }
}
export const getCards = async (req, res) => {
    try {
        const cards = await Card.find({})
        return res.json(cards)
    } catch (e) {
        return res.status(401).json({ message: "Не удалось загрузить курсы" })
    }
}
export const getCard = async (req, res) => {
    try {
        const { id } = req.body
        const card = await Card.findOne({ _id: id })
        const promo = await CardPromo.findOne({ card: id })

        return res.status(200).json({ card: { card, promo } })
    } catch (e) {
        return res.status(401).json({ message: "Произошла ошибка при загрузке" })
    }
}

export const changeCardInfo = async (req, res) => {
    try {
        const data = req.body
        const path = config.get('staticPath') + '\\'
        console.log(req.file);

        const currentCard = await Card.findByIdAndUpdate(data._id[1], {
            title: data.title[1],
            text: data.text,
            type: data.type, popular: data.popular

        })
        // if (req.file.filename !== undefined) {
        //     await Card.findByIdAndUpdate(data._id[1], {
        //         image: req.file.filename
        //     })
        // }
        await CardPromo.findOneAndUpdate({ card: data._id[1] }, {
            title: data.title[0], subtitle: data.subtitle, description: data.description,
            willLearn: data.willLearn.split(','), price: data.price
        })
        if (req.file) {
            if (fs.existsSync(path + currentCard.image)) {
                fs.unlinkSync(path + currentCard.image)
            }
            await Card.findOneAndUpdate({ card: data._id[1] }, { image: req.file.filename })
        }


        return res.status(200).json({ message: 'Карточка успешно изменена' })
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Произошла ошибка при изменении" })
    }
}

export const getCardPromo = async (req, res) => {
    try {

        const card = await Card.findOne({ id: req.body.id })
        const promo = await CardPromo.findOne({ card: req.body.id })
        if (!promo) {
            return res.status(401).json({ message: "Промо не существует" })
        }
        return res.json({
            promo: {
                title: promo.title, subtitle: promo.subtitle, card: req.body.id, description: promo.description,
                willLearn: promo.willLearn, price: promo.price, image: card.image
            }
        })

    } catch (error) {
        return res.status(401).json({ message: "Произошла ошибка при загрузке" })
    }
}
export const addLessonBlock = async (req, res) => {
    try {
        const { cardId, title } = req.body

        const lessonBlock = await new LessonBlock({ lessons: [], cardId: cardId, title: title })
        await lessonBlock.save()
        const lessons = await LessonBlock.find({ card: cardId })
        // const card = await Card.findByIdAndUpdate(cardId, { $push: { lessonBlocks: lessonBlock._id } })
        return res.status(200).json({ lessons: lessons })
    } catch (e) {

        return res.status(401).json({ message: "Произошла ошибка при создании" })
    }
}
export const addLesson = async (req, res) => {
    try {
        const { id, title, text, links } = req.body
        const file = req.file

        if (file) {

            let newLesson = await new Lesson({ title, text, links: links.split(','), lessonBlock: id, comments: [], video: req.file.filename })
            await newLesson.save()
            await LessonBlock.findByIdAndUpdate(id, { $push: { lessons: newLesson._id } })
        } else {
            let newLesson = await new Lesson({ title, text, links: links.split(','), comments: [], lessonBlock: id })
            await newLesson.save()
            await LessonBlock.findByIdAndUpdate(id, { $push: { lessons: newLesson._id } })
        }


        const currentLesson = await LessonBlock.find({ _id: id }).populate({ path: 'lessons' })

        return res.status(200).json({ lesson: currentLesson })
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Произошла ошибка при создании" })
    }
}
export const getLessons = async (req, res) => {
    try {
        const { cardId } = req.body


        const cardLessons = await LessonBlock.find({ cardId: cardId }).populate({ path: 'lessons' })

        return res.status(200).json({ lessons: cardLessons })
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Произошла ошибка при создании" })
    }


}
export const loadComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate({ path: 'user', select: ['username', 'avatar'] })
        return res.status(200).json(comments)
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Произошла ошибка при создании" })
    }


}
export const addComment = async (req, res) => {
    try {
        const { text, userId, lessonId } = req.body


        const comment = await new Comment({ text: text, user: userId, lesson: lessonId })
        await comment.save()
        await Lesson.findByIdAndUpdate(lessonId, { $push: { comments: { text, user: userId } } })
        const comments = await Comment.find({}).populate({ path: 'user', select: ['username', 'avatar'] })


        return res.status(200).json(comments)
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Произошла ошибка при создании" })
    }


}


