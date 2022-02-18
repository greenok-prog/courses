import express from 'express'
import multer from 'multer'
import authMiddleware from '../middleware/auth.middleware.js'
import rolesMiddleware from '../middleware/roles.middleware.js'
import { addCard, changeCardInfo, getCard, getCardPromo, getCards, removeCard } from '../controllers/card.controller.js'



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
router.post('/:id', rolesMiddleware(['ADMIN']), getCard)
router.put('/:id', rolesMiddleware(['ADMIN']), upload.single('image'), changeCardInfo)
router.delete('/:id', rolesMiddleware(['ADMIN']), removeCard)
router.post('/:id/promo', getCardPromo)



export default router