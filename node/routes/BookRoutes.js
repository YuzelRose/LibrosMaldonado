import express from 'express';
import { getAllBooks, getBestSellerBooks, getBookById, getDescountBooks, getProductXML, getSearchBooks } from '../controllers/BookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/BestSellers', getBestSellerBooks);
router.get('/Descount', getDescountBooks);
router.get('/search', getSearchBooks);
router.get('/:id', getBookById);
router.get('/XML', getProductXML);

export default router;