import express from 'express'
import multer from 'multer'
import authMiddleware from '../middleware/auth.middleware.js'
import { addCard, addCardPromo, getCardPromo, getCards } from '../controllers/card.controller.js'



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
router.post('/add', upload.single('file'), addCard)
router.get('/', getCards)
router.post('/:id', getCardPromo)
router.post('/:id/addPromo', addCardPromo)


export default router