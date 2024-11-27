import express from 'express';
import { regisSell } from '../controllers/ShopController.js';

const router = express.Router();

router.post('/Set', regisSell);

export default router;
