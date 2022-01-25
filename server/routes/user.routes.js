import express from 'express'
import { buyCourse, changeAvatar, changeEmail, changePassword, changeProfileInfo } from '../controllers/user.controller.js'
import multer from 'multer'
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'static/')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '.' + file.originalname.split('.')[1])
        }
    })
})


const router = express.Router()
router.put('/profileInfo', changeProfileInfo)
router.put('/email', changeEmail)
router.put('/password', changePassword)
router.put('/buyCourse', buyCourse)
router.put('/avatar', upload.single('avatar'), changeAvatar)

export default router