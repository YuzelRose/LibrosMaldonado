import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getListItemIds, addToCart } from '../utils/JsonUtils';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Libros`;

const CompFavList = () => {
    const [change, setChange] = useState(false);
    const [favItems, setFavItems] = useState([]);    

    useEffect(() => {
        loadCartItems(); 
    }, []);

    const loadCartItems = async () => {
        const ids = getListItemIds(); 
        if (ids.length > 0) {
            try {
                const responses = await Promise.all(ids.map(id => axios.get(`${URI}/${id}`)));
                setFavItems(responses.map(response => response.data)); 
            } catch (error) {
                if (error.response) {
                    console.erlogror('Error de respuesta:', error.response.data);
                } else if (error.request) {
                    console.log('Error de solicitud:', error.request);
                } else {
                    console.log('Error:', error.message);
                }
            }
        } else {
            setFavItems([]); 
        }
    };

    const handleChange = (id) => {
        addToCart(id, 1);
        setChange(prevChange => !prevChange);
    }

    useEffect(() => {
        loadCartItems();
    }, [change]);
    
    return (
        <ul className='item_list'>
            <li><h1>Carrito de Compras</h1></li>
            {favItems.length > 0 ? (
                favItems.map(book => (
                    <li key={book._id}>
                        <Link to={`/ProductSell/${book._id}`} className='dark_link list_link list_name'>{book.Nombre || 'Nombre no disponible'}</Link> 
                        <p className='list_price'><span className='black_span'>Precio:</span> ${book.Costo || 'N/A'}</p>
                        <div className='list_opc'>
                            <p className='list_opc_add' onClick={() => addToCart(book._id)}>Al carrito</p>
                            <p onClick={() => handleChange(book._id)} className='list_opc_drop'>Eliminar</p>
                        </div>
                    </li>
                ))
            ) : (
                <li>La lista está vacía.</li>
            )}
        </ul>
    );
};

export default CompFavList;
