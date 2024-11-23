import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { updateCartItem, deleteCartItem, getCartItemIds, getCartItemCants, changeCartToList } from '../utils/JsonUtils';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Libros`;

const CompShopCart = () => {
    const [change, setChange] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({});  
    const [finalCost, setFinalCost] = useState(0);
    const [agree, setAgree] = useState(false);

    useEffect(() => {
        loadCartItems(); 
    }, []);

    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked); 
    };

    const loadCartItems = async () => {
        const ids = getCartItemIds(); 
        const cants = getCartItemCants(); 
        if (ids.length > 0) {
            try {
                const responses = await Promise.all(ids.map(id => axios.get(`${URI}/${id}`)));
                setCartItems(responses.map(response => response.data)); 
                setQuantities(cants);
            } catch (error) {
                if (error.response) {
                    console.log('Error de respuesta:', error.response.data);
                } else if (error.request) {
                    console.log('Error de solicitud:', error.request);
                } else {
                    console.log('Error:', error.message);
                }
            }
        } else {
            setCartItems([]); 
        }
    };
    
    useEffect(() => {
        calculateFinalCost(cartItems);
    }, [cartItems, quantities]); 

    const calculateFinalCost = useCallback((items = cartItems) => {
        const total = items.reduce((sum, book) => {
            const quantity = quantities[book._id] || 1; 
            return sum + (book.Costo * quantity);
        }, 0);
        setFinalCost(total);
    }, [quantities]);

    const changeFinalCost = (cant, costo) => {
        setFinalCost(prevCost => prevCost + (costo * cant)); 
    };    

    const handleChange = (id) => {
        changeCartToList(id);
        setChange(prevChange => !prevChange);
    }

    const handleDelate = (id) => {
        deleteCartItem(id);
        setChange(prevChange => !prevChange);
    }

    const handleUpdate = (id, cant, costo) => {
        updateCartItem(id, cant);
        changeFinalCost(cant, costo);
        setChange(prevChange => !prevChange);
    }

    useEffect(() => {
        loadCartItems();
    }, [change]);

    const handlePay = () => {

    }

    return (
        <ul className='item_list'>
            <li><h1>Carrito de Compras</h1></li>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((book) => (
                        <li key={book._id}>
                            <Link to={`/ProductSell/${book._id}`} className='dark_link list_link list_name'>
                                {book.Nombre || 'Nombre no disponible'}
                            </Link> 
                            <div className='list_price'>
                                <p><span className='remarc'>Precio:</span> ${book.Costo || 'N/A'} </p>
                                <p><span className='remarc'>Total:</span> ${book.Costo * quantities[book._id] || 'N/A'} </p>
                            </div>
                            <p>
                                <button className='list_cant_btn' onClick={() => handleUpdate(book._id, -1, book.Costo)}>&lt;</button>
                                <span className='list_cant_dis'>{quantities[book._id] || 1}</span>
                                <button className='list_cant_btn' onClick={() => handleUpdate(book._id, 1, book.Costo)}>&gt;</button>
                            </p>
                            <div className='list_opc'>
                                <p onClick={() => handleChange(book._id)} className='list_opc_add'>A favoritos</p>
                                <p onClick={() => handleDelate(book._id)} className='list_opc_drop'>Eliminar</p>
                            </div>
                        </li>
                    ))}
                    <div id='list_pay_opc'>
                        <h2 id='final_cost'>Total: ${finalCost}</h2>
                        <p><input className='checkbox'  type="checkbox" checked={agree} onChange={handleCheckboxChange}/>Acepto los <Link className='blue_link' to={'/Faq/TSDV'}>terminos y condiciones de venta</Link></p>
                        <button id='button_pay' onClick={handlePay}>Pagar</button>
                    </div>
                </>
            ) : (
                <li>El carrito está vacío.</li>
            )}
        </ul>
    );
};

export default CompShopCart;