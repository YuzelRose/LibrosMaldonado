import React from 'react'
import './css/product_obj.css'
import { Link } from 'react-router-dom';

export default function ProductObj({imageLink,price,descount,name,fullInfo,productId,alt}){
    const newPrice = price - (price * descount / 100);

    const checkDiscount = (descount) => {
        return descount > 0;
    };

    const addToCart = (item) => { 
        const userSessionXML = localStorage.getItem('userSession');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");
        
        const newCartItem = xmlDoc.createElement("Item");
        newCartItem.setAttribute("Id", item); 
        const itemIdElement = xmlDoc.createElement("ID");
        itemIdElement.textContent = item; 
        const quantityElement = xmlDoc.createElement("Cantidad");
        quantityElement.textContent = 1; 
        
        newCartItem.appendChild(itemIdElement);
        newCartItem.appendChild(quantityElement);
    
        const cartElement = xmlDoc.getElementsByTagName("Cart")[0];
        cartElement.appendChild(newCartItem);
    
        const serializer = new XMLSerializer();
        const updatedXML = serializer.serializeToString(xmlDoc);
        localStorage.setItem('userSession', updatedXML);
        alert('Artículo agregado al carrito con éxito.');
        console.log(localStorage.getItem('userSession'));
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