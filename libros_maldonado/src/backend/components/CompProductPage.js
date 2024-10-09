import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PordSellObj } from '../../objects';

const CompProductPage = ({ id }) => {
    const [product, setProduct] = useState(null);
    const URI = 'http://localhost:5000/LibMal/Libros/';

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
                console.error('Error:', error);
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
            Autor={product.Autor || "Autor desconocido"} 
            Costo={product.Costo}
            Sinopsis={product.Sinopsis} 
            ImgURL={product.URLImagen}
        />
    );
};

export default CompProductPage;