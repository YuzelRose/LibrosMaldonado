import React from 'react'
import './css/pord_sell_obj.css'
import addcart from '../../img/svg/cartadd.svg'
import favlist from '../../img/svg/favlist.svg'


 
export default function PordSellObj({Name, Autor, Sinopsis, Costo, ImgURL}){
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
                    <button className='product_btn' id='product_buy'><img src={addcart}/>Agregar al carrito</button>
                    <button className='product_btn' id='product_save'><img src={favlist}/>Guardar</button>
                </div>
                <section>
                    <p><span>Sinopsis:</span></p>
                    <p>{Sinopsis}</p>
                </section>
            </section>
            
        </article>
    )
}
