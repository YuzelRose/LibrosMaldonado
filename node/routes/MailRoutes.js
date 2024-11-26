import express from 'express';
import { helpMail, sendPurchaseReceipt } from '../controllers/MailController.js';

const router = express.Router();

router.post('/Help', helpMail);
router.post('/Purchance', sendPurchaseReceipt);

export default router;