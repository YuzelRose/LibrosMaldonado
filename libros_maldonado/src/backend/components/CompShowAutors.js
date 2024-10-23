import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibMal/Autores/';

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
            <article id='autor_selection'>
                <div className='section_name'>
                    <h2>Autores</h2>
                </div>
                <section className='autor_wall'>
                    {autors.slice(0, 8).map((autor) => (
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

export default CompShowAutors;
