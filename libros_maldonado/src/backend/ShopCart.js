import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompShopCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const URI = 'http://localhost:5000/LibrosMaldonado/Cart'; 
    const [finalCost, setFinalCost] = useState(0);
    const [quantities, setQuantities] = useState({}); 
    const [state, setState] = useState(true); 


    const removeFromCart = (itemId) => {
        const userSessionXML = localStorage.getItem('userSession');
        if (userSessionXML) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');
            const cartElement = xmlDoc.getElementsByTagName('Cart')[0];
            if (cartElement) {
                const items = cartElement.getElementsByTagName('Item');
                for (let i = 0; i < items.length; i++) {
                    const idElement = items[i].getElementsByTagName('ID')[0];
                    if (idElement && idElement.textContent === String(itemId)) {
                        cartElement.removeChild(items[i]);
                        break;
                    }
                }
                const serializer = new XMLSerializer();
                const updatedXML = serializer.serializeToString(xmlDoc);
                localStorage.setItem('userSession', updatedXML);
                setCartItems(prevItems => prevItems.filter(item => item.IDLibro !== parseInt(itemId)));
                calculateFinalCost();
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
                const cartItems = Array.from(cartElement.getElementsByTagName('Item')).map(item => ({
                    IDLibro: parseInt(item.getElementsByTagName('ID')[0].textContent, 10), 
                    Cantidad: parseInt(item.getElementsByTagName('Cantidad')[0].textContent, 10)
                }));        
                const cartIds = cartItems.map(item => item.IDLibro).filter(id => !isNaN(id)); 
                console.log('IDs del carrito:', cartIds); 
        
                if (cartIds.length > 0) {
                    await getProduct(cartIds);
                    setQuantities(cartItems.reduce((acc, item) => {
                        acc[item.IDLibro] = item.Cantidad; 
                        return acc;
                    }, {}));
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
                calculateFinalCost(res.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const calculateFinalCost = (items = cartItems) => {
        const total = items.reduce((sum, book) => {
            const quantity = quantities[book.IDLibro] || 0;
            return sum + (book.Costo * quantity);
        }, 0);
        setFinalCost(total);
    };

    const handleQuantityChange = (id, change) => {
        setQuantities(prev => {
            const newQty = (prev[id] || 1) + change;
    
            if (newQty < 1) {
                return prev; // Evitar cantidades negativas
            }
    
            // Actualizar el XML en localStorage
            const userSessionXML = localStorage.getItem('userSession');
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");
    
            const items = xmlDoc.getElementsByTagName("Item");
            for (let i = 0; i < items.length; i++) {
                if (items[i].getAttribute("Id") === String(id)) {
                    items[i].getElementsByTagName("Cantidad")[0].textContent = newQty; // Cambia la cantidad
                    break;
                }
            }
    
            // Serializar el XML actualizado de nuevo a string
            const serializer = new XMLSerializer();
            const updatedXML = serializer.serializeToString(xmlDoc);
            localStorage.setItem('userSession', updatedXML);
    
            return { ...prev, [id]: newQty };
        });
    };
    
    

    useEffect(() => {
        calculateFinalCost();
    }, [quantities]);

    const saveAndPay = () => {
        const userSessionXML = localStorage.getItem('userSession');
    
        if (!userSessionXML) {
            alert('No hay XML para descargar.');
            return;
        }
        
        // Crear un Blob con el contenido del XML
        const blob = new Blob([userSessionXML], { type: 'application/xml' });
        
        // Crear una URL para el Blob
        const url = URL.createObjectURL(blob);
        
        // Crear un enlace y simular un clic para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = 'userSession.xml'; // Nombre del archivo que se descargará
        document.body.appendChild(a);
        a.click();
        
        // Limpiar el enlace y revocar la URL
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <section className='list_section'> 
            <div>
                <h2>Carrito de Compras</h2>
            </div>
            <ul>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map(book => (
                            <li key={book.IDLibro}>
                                <p className='list_name'>{book.Nombre}</p> 
                                <p className='list_price'><span className='black_span'>Precio:</span> ${book.Costo} <span className='black_span'>c/u</span></p>
                                <p>
                                    <button className='list_cant_btn' onClick={() => handleQuantityChange(book.IDLibro, -1)}>&lt;</button>
                                    <span className='list_cant_dis'>{quantities[book.IDLibro] || 1}</span>
                                    <button className='list_cant_btn' onClick={() => handleQuantityChange(book.IDLibro, 1)}>&gt;</button>
                                </p>
                                <div className='list_opc'>
                                    <Link to={`/ProductSell/${book.IDLibro}`} className='dark_link list_link'>Ver producto</Link>
                                    <p onClick={() => removeFromCart(book.IDLibro)} className='list_opc_drop'>Eliminar</p>
                                </div>
                            </li>
                        ))}
                        <div className='list_pay_opc'>
                            <h2>Tienda: ${finalCost}</h2>
                            <button onClick={() => saveAndPay()}>Pagar</button>
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