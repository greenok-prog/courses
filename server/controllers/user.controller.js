import User from "../models/User.js";
import bcrypt from "bcrypt"
import fs from 'fs'
import Card from "../models/Card.js";

export const changeProfileInfo = async (req, res) => {
    try {
        const data = req.body

        await User.findByIdAndUpdate(data.userId, { firstName: data.firstName, secondName: data.secondName, userLink: data.userLink, githubLink: data.githubLink })
        const currentUser = await User.findOne({ _id: data.userId })
        res.json({ currentUser })
    } catch (e) {
        console.log(e);
    }
}
export const changeEmail = async (req, res) => {
    try {
        const data = req.body
        let currentUser = await User.findOne({ _id: data.userId })
        const isPassValid = bcrypt.compareSync(data.password, currentUser.password)
        if (!isPassValid) {
            return res.status(400).json({ message: 'Неверный пароль' })
        }

        await User.findByIdAndUpdate(data.userId, { email: data.email })
        currentUser = await User.findOne({ id: data.userId })
        res.json({ message: "Данные обновлены", email: currentUser.email })
    } catch (e) {
        console.log(e);
    }
}
export const changePassword = async (req, res) => {
    try {
        const data = req.body

        const currentUser = await User.findOne({ _id: data.userId })
        const isPassValid = bcrypt.compareSync(data.oldPas, currentUser.password)
        if (!isPassValid) {
            return res.status(400).json({ message: 'Неверный пароль' })
        }
        const hashPassword = await bcrypt.hash(data.newPas, 7)
        await User.findByIdAndUpdate(data.userId, { password: hashPassword })

        res.json({ message: "Данные обновлены" })
    } catch (e) {
        return res.status(400).json({ message: "Произошла ошибка при изменении" })
    }
}
export const changeAvatar = async (req, res) => {
    try {
        const file = req.file
        const data = req.body


        await User.findByIdAndUpdate(data.userId, { avatar: file.filename })
        const currentUser = await User.findOne({ _id: data.userId })
        return res.json({ avatar: currentUser.avatar })


    } catch (e) {
        console.log(e);
    }
}


export const buyCourse = async (req, res) => {
    try {
        const { userId, cardId } = req.body
        const user = await User.findByIdAndUpdate(userId, { "$push": { purchasedCourses: cardId } }, { new: true })
        await Card.findByIdAndUpdate(cardId, { $inc: { popular: 1 } })
        return res.json({ currentUser: user })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Произошла ошибка при покупке" })
    }
}
