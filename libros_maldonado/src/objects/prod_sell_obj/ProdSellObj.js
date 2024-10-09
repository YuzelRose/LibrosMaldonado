import React from 'react'
import './css/pord_sell_obj.css'
import addcart from '../../img/svg/cartadd.svg'
import favlist from '../../img/svg/favlist.svg'
import { addToCart } from '../../backend/utils/XMLUtils';
import { useAuth } from '../../backend/utils/AuthContext';
import { addToFavorites } from '../../backend/utils/XMLUtils.js';

export default function PordSellObj({id, Name, Autor, Sinopsis, Costo, ImgURL}) {
    const {isLogged} = useAuth()

    return(
        <article className='product_wrapper'>
            <figcaption className='product_image'>
                <img src={ImgURL} alt={Name} />
            </figcaption>
            <section className='product_info'>
                <h2><span>Titulo:</span> {Name}</h2>
                <p><span>Escritor/es:</span> {Autor}</p>
                <h3><span>Precio:</span> ${Costo}</h3>
                <div className='product_option'>
                    {
                        isLogged ? (
                            <>
                                <button onClick={() => addToCart(id)} className='product_btn' id='product_buy'><img src={addcart} alt='Cart'/>Agregar al carrito</button>
                                <button onClick={() => addToFavorites(id)} className='product_btn' id='product_save'><img src={favlist} alt='Favoritos'/>Guardar</button>
                            </>
                        ) : <h3>Inicie sesión para realizar compras</h3>
                    }
                </div>
                <section>
                    <p><span>Sinopsis:</span></p>
                    <p>{Sinopsis}</p>
                </section>
            </section>
            
        </article>
    )
}
