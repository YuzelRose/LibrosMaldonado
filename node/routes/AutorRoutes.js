import express from 'express';
import { getAutores, getAutorById, getAutorByName } from '../controllers/AutorController.js';

const router = express.Router();

router.get('/', getAutores);
router.get('/id/:id', getAutorById);
router.get('/name/:Name', getAutorByName);

export default router;