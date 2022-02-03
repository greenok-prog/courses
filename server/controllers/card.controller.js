import fs from 'fs'
import config from 'config'
// import { v4 } from 'uuid';


import Card from "../models/Card.js"
import User from "../models/User.js"
import CardPromo from "../models/CardPromo.js"



export const addCard = async (req, res) => {
    try {
        const file = req.file
        const cardData = req.body

        const card = await new Card({
            title: cardData.title,
            text: cardData.text, image: file.filename,
            type: cardData.type, popular: 0
        })
        await card.save()
        return res.status(201).json({ card })
    } catch (e) {
        return res.json({ message: "Чего то ты не добавил" })
    }
}
export const removeCard = async (req, res) => {
    try {
        const { id } = req.body
        await CardPromo.findOneAndDelete({ card: id })
        const card = await Card.findOneAndDelete({ _id: id })


        fs.unlinkSync(config.get('staticPath') + '\\' + card.image)
        return res.status(201).json({ message: 'Карточка была удалена' })
    } catch (e) {
        return res.json({ message: "Чего то ты не добавил" })
    }
}
export const getCards = async (req, res) => {
    try {
        const cards = await Card.find({})
        return res.json(cards)
    } catch (e) {
        console.log(e);
    }
}
export const getCardPromo = async (req, res) => {
    try {

        const card = await Card.findOne({ id: req.body.id })
        const promo = await CardPromo.findOne({ card: req.body.id })
        if (!promo) {
            return res.json({ message: "Промо не существует" })
        }
        return res.json({
            promo: {
                title: promo.title, subtitle: promo.subtitle, card: req.body.id, description: promo.description,
                willLearn: promo.willLearn, price: promo.price, image: card.image
            }
        })

    } catch (error) {
        console.log(error);
    }
}
export const addCardPromo = async (req, res) => {
    try {
        const { title, description, willLearn, price, image, subtitle } = req.body.promo
        const currentCard = await Card.findOne({ id: req.body.id })

        const promo = await CardPromo.findOne({ card: req.body.id })
        if (promo) {
            console.log(promo.card);
            return res.json({ message: "Промо этой карточки уже существует" })
        }

        const newPromo = new CardPromo({
            title: title, subtitle: subtitle, card: req.body.id, image: image, description: description,
            willLearn: willLearn, price: price
        })
        await newPromo.save()
        return res.json({ data: newPromo })
    } catch (e) {

    }
}
// export const addCardToFavorite = async (req, res) => {
//     try {
//         await User.updateOne({ id: req.body.userId }, { "$push": { favoriteCourses: req.body.card } }, { new: True })
//         return res.status(201).json({ card: req.body.card.card })
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const removeCardFromFavorite = async (req, res) => {
//     try {
//         await User.updateOne({ id: req.body.userId }, { "$pull": { favoriteCourses: req.body.card } }, { safe: true, multi: true })
//         return res.status(201).json({ message: 'Успешно' })
//     } catch (error) {
//         console.log(error)
//     }

// }