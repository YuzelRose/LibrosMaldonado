import express from 'express'
import { getAllAutors ,getAllBooks, serchBooks, getDescountBooks, getAutors, getBestSellerBooks, createUser, logUser, getProduct } from '../controllers/MysqlController.js'
const router = express.Router()

router.get('/Wall', getAllBooks)
router.get('/Wall/:Nombre', serchBooks)
router.get('/Product/:IDLibro', getProduct)
router.get('/Bdes', getDescountBooks)
router.get('/Autor', getAutors)
router.get('/WallAutor', getAllAutors)
router.get('/Bsel', getBestSellerBooks)
router.post('/Register', createUser)
router.get('/Login/:Correo', logUser);


//router.put('/', updateScore)
//router.delete('/', dropUser)

export default router;