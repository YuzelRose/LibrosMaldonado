import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ProductObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Libros/`;
const URI_SERCH = `${URI_START}/LibMal/Libros/search`;

const FormBookFilter = ({URLname}) => {
    const navigate = useNavigate();
    const [isSerching, setIsSerching] = useState(false);
    const [serchResult, setSerchResult] = useState([]);
    const [name, setName] = useState(URLname);
    const [autor, setAutor] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [discount, setDiscount] = useState(false);

    const changeState = () => {
        navigate('/AutorWall');
    }

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            if (URLname) {
                const res = await axios.get(`${URI}/name/${URLname}`);
                setSerchResult(res.data); 
            } else {
                const res = await axios.get(URI);
                setSerchResult(res.data); 
            }
        } catch (error) {
            console.error("Error al obtener libros:", error);
            setSerchResult([]); 
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URI_SERCH, {
                name: name,
                autor: autor,
                minPrice: minPrice,
                maxPrice: maxPrice,
                descuento: discount
            });
            setIsSerching(true)
            setSerchResult(res.data);
        } catch(error) {
            alert('Error al buscar libro')
        }
    }

    return (
        <>
            <aside className='aside_filter'>
                <h2>Filtro: <button onClick={changeState} className='serch_btn'>Productos</button></h2>
                <form className='form_filter' onSubmit={handleSearch}>
                    <p>Nombre:</p>
                    <input className='text_filter' type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                    <p>Autor:</p>
                    <input className='text_filter' type='text' placeholder='Autor' value={autor} onChange={(e) => setAutor(e.target.value)} />
                    <p><input className='checkbox' type='checkbox' checked={discount} onChange={(e) => setDiscount(e.target.checked)} />En descuento</p>
                    <p>Costo:</p>
                    <input className='text_filter' type='text' placeholder='Minimo' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                    <p/>
                    <input className='text_filter' type='text' placeholder='Maximo' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    <button className='serch_btn' type='submit'>Busacar</button>
                </form>
            </aside>
            <section className='section_wall'>
                <section className='sale_wall_wrapper'>
                    {serchResult.map((bookObject) => (
                        <ProductObj
                            key={bookObject._id}
                            productId={bookObject._id}
                            imageLink={bookObject.URLImagen}
                            price={bookObject.Costo}
                            descount={bookObject.Descuento}
                            name={bookObject.Nombre}
                            fullInfo={bookObject.Sinopsis}
                            alt={bookObject.Nombre}
                        />
                    ))}
                </section>
            </section>
        </>
        
    );
};

export default FormBookFilter;