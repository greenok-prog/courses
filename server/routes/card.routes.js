import express from 'express'
import multer from 'multer'
import authMiddleware from '../middleware/auth.middleware.js'
import rolesMiddleware from '../middleware/roles.middleware.js'
import { addCard, addCardPromo, getCardPromo, getCards, removeCard } from '../controllers/card.controller.js'



const router = express.Router()
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

router.post('/add', rolesMiddleware(['ADMIN']), upload.single('file'), addCard)
router.get('/', getCards)
router.delete('/:id', rolesMiddleware(['ADMIN']), removeCard)
router.post('/:id', getCardPromo)
router.post('/:id/addPromo', addCardPromo)


export default router