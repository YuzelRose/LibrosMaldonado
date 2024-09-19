import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorObj } from '../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibrosMaldonado/WallAutor';

const CompShowAllAutors = () => {
    const navigate = useNavigate();
    const [autors, setAutor] = useState([]);

    const seeMore = () => {
        navigate('/ProductWall');
    };

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

export default CompShowAllAutors;
