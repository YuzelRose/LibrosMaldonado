import express from 'express';
import { getUserById, getUserByMail, postLogIn, updateUser,actualizarContrasena,actualizarDatosUsuario } from '../controllers/UserController.js';

const router = express.Router();

router.post('/login', postLogIn);
router.get('/:id', getUserById);
router.get('/find/:mail', getUserByMail);

router.put('/update/:id', updateUser);

router.put('/updatedata/:correo', actualizarDatosUsuario);
router.put('/updatepass/:correo', actualizarContrasena);


export default router;