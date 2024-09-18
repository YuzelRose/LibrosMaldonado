import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibrosMaldonado/Autor';

const CompShowAutors = () => {
    const navigate = useNavigate();
    const [autors, setAutor] = useState([]);

    const seeMore = () => {
        navigate('/ProductWall');
    };

    useEffect(() => {
        getAutors();
    }, []);

    const getAutors = async () => {
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
                <div className='section_name'>
                    <h2>Autores</h2>
                </div>
                <section className='autor_wall'>
                    {autors.map((autor) => (
                        <AutorObj
                            key={autor.IDAutor}
                            name={autor.Nombre}
                            imgURL={autor.IDAutor}
                        />
                    ))}
                </section>
                <button className='more_btn' onClick={seeMore}>Ver todos</button>
            </article>
        ) : null
    );
    
};

export default CompShowAutors;
