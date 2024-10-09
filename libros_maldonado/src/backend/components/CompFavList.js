import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { removeFromFavorites, addToCart } from '../utils/XMLUtils';


const CompFavList = () => {
    const [favItems, setFavItems] = useState([]); 
    const URI = 'http://localhost:5000/LibMal/Libros/XML';

    const [fetched, setFetched] = useState(true);

    const getProduct = useCallback(async (cartIds) => {
        try {
            const idsQuery = cartIds.join(',');
            const res = await axios.get(`${URI}?ids=${idsQuery}`);
            if (res.data.length > 0) {
                setFavItems(res.data); 
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }, [URI]);

    useEffect(() => {
        const fetchFavItems = async () => {
            const userSessionXML = localStorage.getItem('userSession');
            if (userSessionXML) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');
                const favListElement = xmlDoc.getElementsByTagName('FavList')[0];

                const favItems = favListElement
                    ? Array.from(favListElement.getElementsByTagName('Item')).map(item => ({
                        IDLibro: parseInt(item.getElementsByTagName('ID')[0].textContent, 10),
                    }))
                    : [];

                const favIds = favItems.map(item => item.IDLibro).filter(id => !isNaN(id));
                console.log('IDs de la lista de favoritos:', favIds); 

                if (favIds.length > 0) {
                    try {
                        await getProduct(favIds); 
                    } catch (error) {
                        console.error('Error fetching favorite items:', error);
                    }
                }
            }
        }

        if (fetched) {
            setFetched(false);
            fetchFavItems();
        }
    }, [fetched, getProduct]);

    const remove = (itemId) => {
        removeFromFavorites(itemId);
        setFavItems(prevItems => prevItems.filter(item => item.IDLibro !== parseInt(itemId)));
    }

    return (
        <section className='list_section'> 
            <div>
                <h2>Lista de Favoritos</h2>
            </div>
            <ul>
                {favItems.length > 0 ? (
                    <>
                        {favItems.map(book => (
                            <li key={book.IDLibro}>
                                <Link to={`/ProductSell/${book.IDLibro}`} className='dark_link list_link list_name'>{book.Nombre || 'Nombre no disponible'}</Link> 
                                <p className='list_price'><span className='black_span'>Precio:</span> ${book.Costo || 'N/A'}</p>
                                <div className='list_opc'>
                                    <p className='list_opc_add' onClick={() => addToCart(book.IDLibro)}>Al carrito</p>
                                    <p onClick={() => remove(book.IDLibro)} className='list_opc_drop'>Eliminar</p>
                                </div>
                            </li>
                        ))}
                    </>
                ) : (
                    <li>La lista está vacía.</li>
                )}
            </ul>
        </section>
    );
};

export default CompFavList;
