import React from 'react'
import './css/product_obj.css'
import { Link } from 'react-router-dom';

export default function ProductObj({imageLink,price,descount,name,fullInfo,productId,alt}){
    const newPrice = price - (price * descount / 100);

    const checkDiscount = (descount) => {
        return descount > 0;
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
                <button>Añadir +</button>
            </section>

        </section>
    )
}