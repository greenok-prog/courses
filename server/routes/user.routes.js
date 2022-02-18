import express from 'express'
import { buyCourse, changeAvatar, changeEmail, changePassword, changeProfileInfo, deleteUser, getAllUsers } from '../controllers/user.controller.js'
import multer from 'multer'
import authMiddleware from '../middleware/auth.middleware.js'
import Role from '../models/Role.js'
import rolesMiddleware from '../middleware/roles.middleware.js'
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
// router.post('/role', async (req, res) => {
//     const adminRole = await new Role({ value: 'ADMIN' })
//     const userRole = await new Role({ value: 'USER' })
//     await userRole.save()
//     res.json({ message: 'Дада' })
// })
// rolesMiddleware(['ADMIN'])
router.get('/', rolesMiddleware(['ADMIN']), getAllUsers)
router.delete('/:id', deleteUser)
router.put('/profileInfo', authMiddleware, changeProfileInfo)
router.put('/email', authMiddleware, changeEmail)
router.put('/password', authMiddleware, changePassword)
router.put('/buyCourse', authMiddleware, buyCourse)
router.put('/avatar', upload.single('avatar'), authMiddleware, changeAvatar)

export default router