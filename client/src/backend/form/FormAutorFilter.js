
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AutorObj, ProductObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Autores/`;
const URI_SERCH = `${URI_START}/LibMal/Autores/search`;

const FormAutorFilter = () => {
    const navigate = useNavigate();
    const [serchResult, setSerchResult] = useState([]);
    const [name, setName] = useState('');

    const changeState = () => {
        navigate('/ProductWall');
    }

    useEffect(() => {
        getAutors();
    }, []);

    const getAutors = async () => {
        try {
            const res = await axios.get(URI);
            setSerchResult(res.data); 
        } catch (error) {
            console.error("Error al obtener Autores:", error);
            setSerchResult([]); 
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URI_SERCH, {
                name: name
            });
            setSerchResult(res.data);
        } catch(error) {
            alert('Error al buscar Autor')
        }
    }

    return (
        <>
            <aside className='aside_filter'>
                <h2>Filtro: <button onClick={changeState} className='serch_btn'>Autores</button></h2>
                <form className='form_filter' onSubmit={handleSearch}>
                    <p>Nombre:</p>
                    <input className='text_filter' type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='serch_btn' type='submit'>Busacar</button>
                </form>
            </aside>
            <section className='section_wall'>
                <section className='sale_wall_wrapper'>
                    {serchResult.map((autor) => (
                        <AutorObj
                            key={autor._id}
                            name={autor.Nombre}
                            imgURL={autor.URLImage}
                        />
                    ))}
                </section>
            </section>
        </>
        
    );
};

export default FormAutorFilter;