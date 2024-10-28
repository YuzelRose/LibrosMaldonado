import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './pord_sell_obj.css'
import addcart from '../../img/svg/cartadd.svg'
import favlist from '../../img/svg/favlist.svg'
import { useAuth } from '../../backend/utils/AuthContext';
import { addToCart, addToList } from '../../backend/utils/JsonUtils.js';

export default function PordSellObj({id, Name, Autor, Sinopsis, Costo, Descuento, ImgURL}) {
    const {isLogged} = useAuth()
    const [cant, setCant] = useState(1)
    const [see, setSee] = useState(false)

    const newPrice = Costo - (Costo * Descuento / 100);

    const checkDiscount = (Descuento) => {
        return Descuento > 0;
    };

    const handleQuantityChange = (val) => {
        setCant(prevCant => Math.max(prevCant + val, 1)); 
    };

    const showMore = () => {
        setSee(prevSee => !prevSee);
    }

    return(
        <>
            <article id='product'>
                <figure className='product_image'>
                    <img src={ImgURL} alt={Name} />
                </figure>
                <figcaption id='product_info'>
                    <p className='title'>{Name}</p>
                    {checkDiscount(Descuento) ? (
                        <p className='price'>
                            <sub className='before_price'>${Costo}</sub> ${newPrice} <sup className='descount'>-{Descuento}%</sup>
                        </p>
                    ) : (
                        <p className='secondary'>${Costo}</p>
                    )}
                    <p className='title'>Escritor/es:</p>
                    {
                        Autor.map((autor, index) => (
                            <p><Link key={index} to={`/AutorInfo/${autor}`} className='linkToautor dark_link secondary'>
                                {autor}
                            </Link></p>
                        ))
                    }
                    {
                    see ? 
                        <p className='title'>Sinopsis: <sup onClick={showMore}>Mostrar menos</sup></p>
                        :
                        <p className='title'>Sinopsis: <sup onClick={showMore}>Mostrar más</sup></p>
                    }
                    <div id='div_iner_sinopsis'>
                        <pre id='iner_sinopsis'>
                            {Sinopsis}
                        </pre>
                    </div>
                </figcaption>
                <section id='product_opc_panel'>

                {
                    isLogged ? (
                        <>
                            <button onClick={() => addToCart(id, cant)} className='product_btn' id='product_buy'><img src={addcart} alt='Cart'/>Agregar al carrito</button>
                            <p>
                                <button className='list_cant_btn' onClick={() => handleQuantityChange(-1)}>&lt;</button>
                                <span className='list_cant_dis'>{cant}</span>
                                <button className='list_cant_btn' onClick={() => handleQuantityChange(1)}>&gt;</button>
                            </p>
                            <button onClick={() => addToList(id)} className='product_btn' id='product_save'><img src={favlist} alt='Favoritos'/>Guardar</button>
                        </>
                    ) : <h3>Inicie sesión para realizar compras</h3>
                }
                </section>
            </article>
            {
                see ? (
                    <section className='see' id='see_true'>
                        <h1>Sinopsis: <sup id='more_info' onClick={showMore}>Mostrar menos</sup></h1>
                        <h1 className='textstart'>Escritor/es:</h1>
                        {
                            Autor.map((autor, index) => (
                                <p><Link key={index} to={`/AutorInfo/${autor}`} className='linkToautor dark_link secondary'>
                                    {autor}
                                </Link></p>
                            ))
                        }
                        <pre>
                            {Sinopsis}
                        </pre>
                    </section>
                ) : null
            }
        </>
    )
}
