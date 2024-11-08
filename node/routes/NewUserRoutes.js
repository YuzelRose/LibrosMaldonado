import express from 'express';
import { getNewUser, postNewUser } from '../controllers/NewUserController.js';

const router = express.Router();

router.get('/GetNewUser/:key', getNewUser);
router.post('/createNewUser', postNewUser);

export default router;
