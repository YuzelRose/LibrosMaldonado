import LibroModels from "../models/MysqlModels.js";
import { Op, Sequelize  } from 'sequelize';

//import QuestionModesl from "";

export const getAllBooks = async (req, res) => {
    try {
        const books = await LibroModels.findAll()
        res.json(books)
    } catch(error) {
        res.json( {message: error.message} )
    }
}

export const serchBooks = async (req, res) => {
    try {
        const Nombre = req.params.Nombre;
        const searchResults = await LibroModels.findAll({
            where: {
                [Op.and]: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('Nombre')), {
                    [Op.like]: `%${Nombre.toLowerCase()}%`
                })
            }
        });
        res.json(searchResults);
    } catch (error) {
        res.json({ message: error.message });
    }
}
/*No esta en funcionamiento todavia crea preguntas para la empresa
export const createQuestion = async (req, res) => {
    try {
        await QuestionModesl.create(req.body)
        res.json({
            "message":"Su pregunta a sido eviada"
        })
    } catch(error) {
        req.json( {message: error.message} )
    }
}
//califica libros
export const updateScore = async (req, res) => {
    try {
        await LibroModels.update(req.body, {
            where: {
                IDLibro: req.params.IDLibro
            }
        })
        res.json({
            "message":"Gracias por su calificación."
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//elimina cuentas de usuario
export const dropUser = async (req, res) => {
    try {
        await UsuarioModels.destroy({
            where: {
                IDUsuario: req.params.IDUsuario
            }
        })
        res.json({
            "message":"Lamentamos los inconvenientes, esperamos su regreso."
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crea suarios
export const createUser = async (req, res) => {
    try {
        await UsuarioModels.create(req.body)
        res.json({
            "message":"Su pregunta a sido eviada"
        })
    } catch(error) {
        res.json( {message: error.message} )
    }
}
*/