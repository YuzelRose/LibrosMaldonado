import React from 'react'
import './css/product_obj.css'
import { Link } from 'react-router-dom';

export default function ProductObj({imageLink,price,descount,name,fullInfo,productId,alt}){
    const newPrice = price - (price * descount / 100);

    const checkDiscount = (descount) => {
        return descount > 0;
    };

    const addToCart = (item) => {
        // Recuperar el XML del localStorage
        const userSessionXML = localStorage.getItem('userSession');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");
        // Crear un nuevo elemento para el artículo del carrito
        const newCartItem = xmlDoc.createElement("Item");
        newCartItem.textContent = item;
    
        // Agregar el nuevo artículo al carrito
        const cartElement = xmlDoc.getElementsByTagName("Cart")[0];
        cartElement.appendChild(newCartItem);
    
        // Serializar el XML actualizado de nuevo a string
        const serializer = new XMLSerializer();
        const updatedXML = serializer.serializeToString(xmlDoc);
    
        // Guardar el XML actualizado en localStorage
        localStorage.setItem('userSession', updatedXML);
        alert('Artículo agregado al carrito con éxito.');
    };

    return(
        <section className="product_obj">
            <figure>
                <img src={imageLink} alt={alt}/>
            </figure>
            <figcaption className="info">
                {checkDiscount(descount) ? (
                    <p className='price'>${newPrice}<sup>-{descount}%</sup></p>
                ) : (
                    <p className='price'>${price}</p>
                )}
                <p to={`/ProductSell/${productId}`}>{name}</p>
            </figcaption>

            <section className="full_info">
                <p>{name}</p>
                {checkDiscount(descount) ? (
                    <p>${newPrice}<sup>-{descount}%</sup></p>
                ) : (
                    <p>${price}</p>
                )}
                <p>{fullInfo}</p>
                <Link className="link" id="prod_link" to={`/ProductSell/${productId}`}> Ver producto </Link>
                <button className='product_obj_to_cart' onClick={() => addToCart(productId)}>Al carrito</button>
            </section>

        </section>
    )
}