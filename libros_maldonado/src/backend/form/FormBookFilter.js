import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormBookFilter = () => {
    const navigate = useNavigate(); // Hook para redireccionar
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [discount, setDiscount] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault(); 
        const queryParams = new URLSearchParams({
            name,
            autor: author,
            costo: `${minPrice},${maxPrice}`,
            descuento: discount ? 1 : undefined 
        }).toString();

        navigate(`/ProductWall?${queryParams}`);
    };

    return (
        <form className='form_filter' onSubmit={handleSearch}>
            <p>Nombre:</p>
            <input className='text_filter' type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
            <p>Autor:</p>
            <input className='text_filter' type='text' placeholder='Autor' value={author} onChange={(e) => setAuthor(e.target.value)} />
            <p><input type='checkbox' checked={discount} onChange={(e) => setDiscount(e.target.checked)} /> En descuento</p>
            <p>Costo:</p>
            <input className='text_filter' type='text' placeholder='Minimo' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <p/>
            <input className='text_filter' type='text' placeholder='Maximo' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <input className='logout_btn serch_btn' type='submit' value='Buscar' />
        </form>
    );
};

export default FormBookFilter;