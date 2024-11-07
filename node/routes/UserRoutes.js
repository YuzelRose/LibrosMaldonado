import express from 'express';
import { getUserById, postLogIn, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.post('/login', postLogIn);
router.get('/:id', getUserById);
router.put('/update/:id', updateUser);

export default router;