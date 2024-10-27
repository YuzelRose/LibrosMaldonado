import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'http://3.130.27.77:5000'
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
            console.error('Error:', error);
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
