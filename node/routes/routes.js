import express from 'express'
import { getAllBooks, serchBooks, getDescountBooks, getAutors, getBestSellerBooks, createUser, logUser } from '../controllers/MysqlController.js'
const router = express.Router()

router.get('/Wall', getAllBooks)
router.get('/Wall/:Nombre', serchBooks)
router.get('/Bdes', getDescountBooks)
router.get('/Autor', getAutors)
router.get('/Bsel', getBestSellerBooks)
router.post('/Register', createUser)
router.get('/Login/:Correo', logUser);


//router.put('/', updateScore)
//router.delete('/', dropUser)

export default router;