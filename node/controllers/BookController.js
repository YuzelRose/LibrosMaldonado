import Libro from '../models/BookModel.js'
import { Types } from 'mongoose';

export const getProductXML = async (req, res) => {
    try {
        const ids = req.query.ids.split(','); // Obtener los IDs de la consulta
        const searchResults = await Libro.find({
            _id: { 
                $in: ids.map(id => Types.ObjectId(id)) // Convertir a ObjectId para MongoDB
            }
        });

        // Verificar si hay resultados
        if (searchResults.length === 0) {
            return res.status(404).json({ message: 'No se encontraron libros.' });
        }

        res.json(searchResults);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: error.message });
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const libros = await Libro.find({
            Existencias: { $gt: 0 },
        });
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getSearchBooks = async (req, res) => {
    try {
        const { name, costo, descuento, autor } = req.query; 
        const filters = { Existencias: { $gt: 0 } }; 
        if (name) {
            filters.Nombre = { $regex: name, $options: 'i' }; 
        }
        if (costo) {
            filters.Costo = { $gte: minPrice, $lte: maxPrice }
        }
        if (descuento) {
            filters.Descuento = { $gte: Number(descuento) }; 
        }
        if (autor) {
            filters.Autor = { $regex: autor, $options: 'i' }; 
        }
        const libros = await Libro.find(filters);
        if (libros.length === 0) {
            return res.status(404).json({ message: 'No se encontraron libros' });
        }
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getDescountBooks = async (req, res) => {
    try {
        const libros = await Libro.find({
            Descuento: { $gt: 0 },
            Existencias: { $gt: 0 },
        }).sort({ Descuento: -1 }).limit(5);
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBestSellerBooks = async (req, res) => {
    try {
        const libros = await Libro.find({
            Ventas: { $gt: 0 },
            Existencias: { $gt: 0 },
        }).sort({ Ventas: -1 }).limit(5);
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBookById = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id); 
        if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json(libro); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
