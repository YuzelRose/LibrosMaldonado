import Autor from "../models/AutorModel.js";

export const getAutores = async (req, res) => {
    try {
        const autores = await Autor.find(); // Debería recuperar autores ahora
        console.log('Autores recuperados:', autores);
        res.json(autores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAutorById = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) return res.status(404).json({ message: 'Autor no encontrado' });
        res.json(autor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAutorByName = async (req, res) => {
    try {
        const { Name } = req.params;
        const autores  = await Autor.find({
            Nombre: { $regex: Name, $options: 'i' }
        });

        if (autores.length === 0) {
            return res.status(404).json({ message: 'No se encontraron autores' });
        }
        res.json(autores);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};