import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'http://localhost:5000'
const URI = `${URI_START}/LibMal/Autores/`;

const CompAllAutors = () => {
    const [autors, setAutor] = useState([]);

    useEffect(() => {
        getAllAutors();
    }, []);

    const getAllAutors = async () => {
        try {
            const res = await axios.get(URI)
            setAutor(res.data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        autors.length > 0 ? (
            <section className='autor_wall all_autors'>
                {autors.map((autor) => (
                    <AutorObj
                        key={autor._id}
                        name={autor.Nombre}
                        imgURL={autor.URLImage}
                    />
                ))}
            </section>
        ) : null
    );
    
};

export default CompAllAutors;