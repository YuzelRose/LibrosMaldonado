import React from 'react'
import './product_obj.css'
import { useNavigate } from 'react-router-dom';

export default function ProductObj({imageLink,price,descount,name,fullInfo,productId,alt}) {
    const navigate = useNavigate()

    const newPrice = price - (price * descount / 100);

    const checkDiscount = (descount) => {
        return descount > 0;
    };    

    const toProductPage = (productId) => {
        navigate(`/ProductSell/${productId}`);
    }

    return(
        <section className="product_obj">
            <figure>
                <img src={imageLink} alt={alt}/>
            </figure>
            <figcaption className="info">
                {checkDiscount(descount) ? (
                    <p className='price'>
                        <sub className='before_price'>${price}</sub> ${newPrice} <sup className='descount'>-{descount}%</sup>
                    </p>
                ) : (
                    <p className='price'>${price}</p>
                )}
                <p to={`/ProductSell/${productId}`}>{name}</p>
            </figcaption>
            <section className="full_info" onClick={() => toProductPage(productId)}>
                <p>{name}</p>
                {checkDiscount(descount) ? (
                    <p className='price'>
                        <sub className='before_price'>${price}</sub> ${newPrice} <sup className='descount'>-{descount}%</sup>
                    </p>
                ) : (
                    <p>${price}</p>
                )}
                <p>{fullInfo}</p>
            </section>
        </section>
    )
}