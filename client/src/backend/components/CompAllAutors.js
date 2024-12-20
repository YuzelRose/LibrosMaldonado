import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
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
            if (error.response) {
                console.log('Error de respuesta:', error.response.data);
            } else if (error.request) {
                console.errlogor('Error de solicitud:', error.request);
            } else {
                console.log('Error:', error.message);
            }
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