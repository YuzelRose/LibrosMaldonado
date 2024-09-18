import LibroModels from "../models/BookModel.js";
import AutorModels from "../models/AutorModel.js";
import { Op, Sequelize  } from 'sequelize';

//import QuestionModesl from "";

export const getAllBooks = async (req, res) => {
    try {
        const books = await LibroModels.findAll({
            limit: 5
        })
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
export const getDescountBooks = async (req, res) => {
    try {
        const searchResults = await LibroModels.findAll({
            where: {
                Descuento: {
                    [Op.gt]: 0
                }
            },
            order: [['Descuento', 'DESC']], 
            limit: 5
        });
        res.json(searchResults);
    } catch (error) {
        res.json({ message: error.message });
    }
}
export const getBestSellerBooks = async (req, res) => {
    try {
        const searchResults = await LibroModels.findAll({
            where: {
                Ventas: { 
                    [Op.gt]: 0 
                }
            },
            order: [['Ventas', 'DESC']], 
            limit: 5
        });        
        if (searchResults.length > 0) {
            res.json(searchResults);
        } else {
            res.json({ message: "No se encontraron libros con ventas" });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
export const getAutors = async (req, res) => {
    try {
        const books = await AutorModels.findAll({
            limit: 8
        })
        res.json(books)
    } catch(error) {
        res.json( {message: error.message} )
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