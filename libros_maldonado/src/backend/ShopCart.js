import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompShopCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const URI = 'http://localhost:5000/LibrosMaldonado/Cart'; 

    const removeFromCart = (itemId) => {
        // Recuperar el XML del localStorage
        const userSessionXML = localStorage.getItem('userSession');
        if (userSessionXML) {
            // Parsear el XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');
            
            // Encontrar el elemento del carrito
            const cartElement = xmlDoc.getElementsByTagName('Cart')[0];
            if (cartElement) {
                // Encontrar el item por ID y eliminarlo
                const items = cartElement.getElementsByTagName('Item');
                for (let i = 0; i < items.length; i++) {
                    if (items[i].textContent === itemId) {
                        cartElement.removeChild(items[i]);
                        break;
                    }
                }
                
                // Convertir el XML actualizado de nuevo a string
                const serializer = new XMLSerializer();
                const updatedXML = serializer.serializeToString(xmlDoc);
                
                // Guardar el XML actualizado en localStorage
                localStorage.setItem('userSession', updatedXML);
                
                // Actualizar el estado de cartItems
                setCartItems(prevItems => prevItems.filter(item => item.IDLibro !== parseInt(itemId)));
            }
        }
    };
    

    useEffect(() => {
        const fetchCartItems = async () => {
            const userSessionXML = localStorage.getItem('userSession');
            if (userSessionXML) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');
                const cartElement = xmlDoc.getElementsByTagName('Cart')[0];
                const cartIds = cartElement ? Array.from(cartElement.getElementsByTagName('Item')).map(item => item.textContent) : [];
                
                if (cartIds.length > 0) {
                    getProduct(cartIds);
                }
            }
        };

        fetchCartItems();
    }, []);

    const getProduct = async (cartIds) => {
        try {
            const idsQuery = cartIds.join(',');
            const res = await axios.get(`${URI}?ids=${idsQuery}`);
            if (res.data.length > 0) {
                setCartItems(res.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <section className='list_section'> 
            <div>
                <h2>Carrito de Compras</h2>
            </div>
            <ul>
                {cartItems.length > 0 ? (
                    cartItems.map(book => (
                        <li key={book.IDLibro}>
                            <p className='list_name'>{book.Nombre}</p> 
                            <p className='list_price'>Precio: ${book.Costo}</p>
                            <div className='list_opc'>
                                <Link to={`/ProductSell/${book.IDLibro}`} className='dark_link list_link'>Ver producto</Link>
                                <p onClick={() => removeFromCart(book.IDLibro)} className='list_opc_drop'>Eliminar</p>
                            </div>
                            
                        </li>
                    ))
                ) : (
                    <li>El carrito está vacío.</li>
                )}
            </ul>
        </section>
    );
};

export default CompShopCart;
