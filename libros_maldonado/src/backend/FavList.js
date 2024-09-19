import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompFavList = () => {
    const [favItems, setFavItems] = useState([]);

    const URI = 'http://localhost:5000/LibrosMaldonado/Product/';


    useEffect(() => {
        const fetchFavItems = async () => {
            // Recuperar el XML del localStorage
            const userSessionXML = localStorage.getItem('userSession');
            if (userSessionXML) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');

                // Obtener y procesar los elementos de la lista de favoritos
                const favListElement = xmlDoc.getElementsByTagName('FavList')[0];
                const favIds = favListElement ? Array.from(favListElement.getElementsByTagName('Item')).map(item => item.textContent) : [];

                try {
                    // Realizar la solicitud GET para obtener detalles de los artículos favoritos
                    const response = await axios.post('/api/fav-items', { ids: favIds });
                    setFavItems(response.data);
                } catch (error) {
                    console.error('Error fetching favorite items:', error);
                }
            }
        };

        fetchFavItems();
    }, []);

    return (
        <div>
            <h2>Lista de Favoritos</h2>
            <ul>
                {favItems.length > 0 ? (
                    favItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))
                ) : (
                    <li>No hay elementos en la lista de favoritos.</li>
                )}
            </ul>
        </div>
    );
};

export default CompFavList;
