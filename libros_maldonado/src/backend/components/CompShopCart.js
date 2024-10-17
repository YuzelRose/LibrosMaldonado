import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { downloadJSON, updateCartItem, deleteCartItem, getCartItemIds, getCartItemCants, changeCartToList } from '../utils/JsonUtils';

const CompShopCart = () => {
    const [change, setChange] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({});  
    const [finalCost, setFinalCost] = useState(0);
    const URI = 'http://localhost:5000/LibMal/Libros';

    useEffect(() => {
        loadCartItems(); 
    }, []);

    const loadCartItems = async () => {
        const ids = getCartItemIds(); 
        const cants = getCartItemCants(); 
        if (ids.length > 0) {
            try {
                const responses = await Promise.all(ids.map(id => axios.get(`${URI}/${id}`)));
                setCartItems(responses.map(response => response.data)); 
                setQuantities(cants);
            } catch (error) {
                console.error('Error fetching books:', error);
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

    return (
        <section className='list_section'> 
            <div>
                <h2>Carrito de Compras</h2>
            </div>
            <ul>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((book) => (
                            <li key={book._id}>
                                <Link to={`/ProductSell/${book._id}`} className='dark_link list_link list_name'>
                                    {book.Nombre || 'Nombre no disponible'}
                                </Link> 
                                <p className='list_price'>
                                    <span className='black_span'>Precio:</span> ${book.Costo || 'N/A'}
                                </p>
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
                        <div className='list_pay_opc'>
                            <h2 className='final_cost'>Total: ${finalCost}</h2>
                            <button onClick={downloadJSON}>Pagar</button>
                        </div>
                    </>
                ) : (
                    <li>El carrito está vacío.</li>
                )}
            </ul>
        </section>
    );
};

export default CompShopCart;