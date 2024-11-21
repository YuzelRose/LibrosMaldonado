import express from 'express';
import { getUserById, getUserByMail, postLogIn, updateUser, updatePass } from '../controllers/UserController.js';

const router = express.Router();

router.post('/login', postLogIn);
router.get('/:id', getUserById);
router.get('/find/:mail', getUserByMail);

router.put('/updatedata/:correo', updateUser);
router.put('/updatepass/:correo', updatePass);


export default router;