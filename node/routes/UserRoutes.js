import express from 'express';
import { getUserById, postCreateUser, postLogIn, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.post('/login', postLogIn);
router.post('/create', postCreateUser);
router.get('/:id', getUserById);
router.put('/update/:id', updateUser);

export default router;