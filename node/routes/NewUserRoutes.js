import express from 'express';
import { getNewUser, postNewUser } from '../controllers/NewUserController.js';

const router = express.Router();

router.get('/postNewUser/:Key', getNewUser);
router.post('/createNewUser', postNewUser);

export default router;
