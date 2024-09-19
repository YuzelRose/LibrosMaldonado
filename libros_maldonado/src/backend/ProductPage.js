import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {PordSellObj} from '../objects'

const CompProductPage = ({ id }) => {
  const [product, setProduct] = useState(null);

  const URI = 'http://localhost:5000/LibrosMaldonado/Product/';

    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            const res = await axios.get(`${URI}${id}`)
            if (res.data.length > 0) {
                setProduct(res.data)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    if (product.error) {
        return <p>Producto no encontrado</p>;
    }

    return (
        product.length > 0 ? (
            product.map((product) => (
                <PordSellObj
                    key={product.IDLibro}
                    Name={product.Nombre}
                    Autor={"autor"} 
                    Costo={product.Costo}
                    Sinopsis={product.Sinopsis} 
                    ImgURL={product.IDLibro}
                />
            ))
        ) : <p>Producto no encontrado</p>
        
    )
}

export default CompProductPage;
