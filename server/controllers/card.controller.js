import fs from 'fs'
import config from 'config'



import Card from "../models/Card.js"

import CardPromo from "../models/CardPromo.js"



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
        const currentCard = await Card.findByIdAndUpdate(data._id[1], {
            title: data.title[1],
            text: data.text,
            type: data.type, popular: data.popular,

        })
        // if (req.file.filename !== undefined) {
        //     await Card.findByIdAndUpdate(data._id[1], {
        //         image: req.file.filename
        //     })
        // }
        await CardPromo.findOneAndUpdate({ card: data._id[1] }, {
            title: data.title[0], subtitle: data.subtitle, image: currentCard.image, description: data.description,
            willLearn: data.willLearn.split(','), price: data.price
        })

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

