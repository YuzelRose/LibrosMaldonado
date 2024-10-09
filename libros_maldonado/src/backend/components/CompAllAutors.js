import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../../objects';

const URI = 'http://localhost:5000/LibMal/Autores/';

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
            <article className='autor_selection'>
                <section className='autor_wall'>
                    {autors.map((autor) => (
                        <AutorObj
                            key={autor._id}
                            name={autor.Nombre}
                            imgURL={autor.URLImage}
                        />
                    ))}
                </section>
            </article>
        ) : null
    );
    
};

export default CompAllAutors;
