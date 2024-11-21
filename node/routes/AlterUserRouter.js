import express from 'express';
import { AlterPass, AlterDrop } from '../controllers/AlterUserController.js';

const router = express.Router();

router.post('/Pass', AlterPass);
router.post('/Drop', AlterDrop);


export default router;