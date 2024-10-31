import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PordSellObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop:5000'
const URI = `${URI_START}/LibMal/Libros/`;

const CompProductPage = ({ id }) => {
    const [product, setProduct] = useState(null);    

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`${URI}${id}`);
                if (res.data) {
                    setProduct(res.data);
                } else {
                    setProduct({ error: 'Producto no encontrado' });
                }
            } catch (error) {
                if (error.response) {
                    console.error('Error de respuesta:', error.response.data);
                } else if (error.request) {
                    console.error('Error de solicitud:', error.request);
                } else {
                    console.error('Error:', error.message);
                }
                setProduct({ error: 'Error al cargar el producto' });
            }
        };
        getProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    if (product.error) {
        return <p>{product.error}</p>;
    }

    return (
        <PordSellObj
            key={product._id}
            id={product._id}
            Name={product.Nombre}
            Autor={product.Autores || "Autor desconocido"} 
            Costo={product.Costo}
            Descuento={product.Descuento}
            Sinopsis={product.Sinopsis} 
            ImgURL={product.URLImagen}
        />
    );
};

export default CompProductPage;