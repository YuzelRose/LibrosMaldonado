import React from 'react'
import './css/product_obj.css'
import { Link } from 'react-router-dom';

export default function ProductObj({imageLink,price,descount,name,fullInfo,Writers,productId,alt}){
    return(
        <section className="product_obj">
            <figure>
                <img src={imageLink} alt={alt}/>
            </figure>
            <figcaption className="info">
                <p>${price}</p>
                <Link class="dark_link" to={`/ProductSell/${productId}`}>{name}</Link>
            </figcaption>
            <section className="full_info">
                <p>{name}</p>
                <p>{Writers}</p>
                <p>${price} <sup>-{descount}</sup></p>
                <p>{fullInfo}</p>
                <Link className="link" id="prod_link" to={`/ProductSell/${productId}`}> Vamos </Link>
                <button>Añadir +</button>
            </section>
        </section>
    )
}