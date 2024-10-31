import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop:5000'
const URI = `${URI_START}/LibMal/WallAutor`;

const CompBookFilterForm = () => {
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
                console.error('Error de respuesta:', error.response.data);
            } else if (error.request) {
                console.error('Error de solicitud:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    }

    return (
        autors.length > 0 ? (
            <article className='autor_selection'>
                <section className='autor_wall'>
                    {autors.map((autor) => (
                        <AutorObj
                            key={autor.IDAutor}
                            name={autor.Nombre}
                            imgURL={autor.IDAutor}
                        />
                    ))}
                </section>
            </article>
        ) : null
    );
    
};

export default CompBookFilterForm;
