import Libro from '../models/BookModel.js'

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

export const getAutorBooks = async (req, res) => {
    try {
        const { Name } = req.params;
        const decodedName = decodeURIComponent(Name); 
        const autores = await Libro.find({
            Autores: { $in: [decodedName] }
        });

        if (autores.length === 0) {
            return res.status(404).json({ message: 'No se encontraron Libros' });
        }
        res.json(autores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
