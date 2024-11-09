import express from 'express';
import { NewPayment } from '../controllers/PaypalController.js';

const router = express.Router();

router.post('/NewPayment', NewPayment);

export default router;