import express from 'express'
import { getAllBooks, serchBooks } from '../controllers/MysqlController.js'
const router = express.Router()

router.get('/ProductWall', getAllBooks)
router.get('/ProductWall/:Nombre', serchBooks)
//router.post('/', createUser)
//router.put('/', updateScore)
//router.delete('/', dropUser)

export default router;