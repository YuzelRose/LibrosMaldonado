import React from 'react'
import './css/pord_sell_obj.css'
import addcart from '../../img/svg/cartadd.svg'
import favlist from '../../img/svg/favlist.svg'


 
export default function PordSellObj({id, Name, Autor, Sinopsis, Costo, ImgURL}) {
    
    const addToFavorites = (item) => {
        const userSessionXML = localStorage.getItem('userSession');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");
    
        const newFavItem = xmlDoc.createElement("Item");
        newFavItem.textContent = item;
    
        const favListElement = xmlDoc.getElementsByTagName("FavList")[0];
        favListElement.appendChild(newFavItem);
    
        const serializer = new XMLSerializer();
        const updatedXML = serializer.serializeToString(xmlDoc);
    
        localStorage.setItem('userSession', updatedXML);
        alert('Artículo agregado a favoritos con éxito.');
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
        <article className='product_wrapper'>
            <figcaption className='product_image'>
                <img src={ImgURL} alt={Name} />
            </figcaption>
            <section className='product_info'>
                <h2><span>Titulo:</span> {Name}</h2>
                <p><span>Escritor/es:</span> {Autor}</p>
                <h3><span>Precio:</span> ${Costo}</h3>
                <div className='product_option'>
                    <button onClick={() => addToCart(id)} className='product_btn' id='product_buy'><img src={addcart}/>Agregar al carrito</button>
                    <button onClick={() => addToFavorites(id)} className='product_btn' id='product_save'><img src={favlist}/>Guardar</button>
                </div>
                <section>
                    <p><span>Sinopsis:</span></p>
                    <p>{Sinopsis}</p>
                </section>
            </section>
            
        </article>
    )
}
