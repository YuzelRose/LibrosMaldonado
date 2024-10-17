import express from 'express';
import { getAutores, getAutorById, getAutorByName, getExactAutorByName } from '../controllers/AutorController.js';

const router = express.Router();

router.get('/', getAutores);
router.get('/id/:id', getAutorById);
router.get('/Name/:Name', getAutorByName);
router.get('/Exact/Name/:Name', getExactAutorByName);

export default router;