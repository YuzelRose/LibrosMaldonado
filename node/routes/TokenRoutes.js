import express from 'express';
import { EncodeTalker, ExcodeTalker } from '../controllers/TokenController.js';

const router = express.Router();

router.post('/EncodeTalker', EncodeTalker);
router.get('/ExcodeTalker/:token', ExcodeTalker);

export default router;