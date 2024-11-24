import express from 'express';
import { getAllBooks, getBestSellerBooks, getBookById, getDescountBooks, getSearchBooks, getAutorBooks, DropBook, ChangeBook, UpdateDesc } from '../controllers/BookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/BestSellers', getBestSellerBooks);
router.get('/Descount', getDescountBooks);
router.get('/search', getSearchBooks);
router.get('/:id', getBookById);
router.get('/Autor/Books/:Name', getAutorBooks)

router.put('/Update/:id', ChangeBook);
router.post('/Drop/:id', DropBook);

router.put('/UpdateMass', UpdateDesc);

export default router;