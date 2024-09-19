import React, { useEffect, useState } from 'react';

import './css/product_wall.css'
import CompShowDesBooks from '../backend/BookWall.js'
import CompShowAllAutors from '../backend/ShowAllAutors.js'
import fond from '../img/fond/loginfondo.png';


function ProductWall(){
    const [butonState, setButonState] = useState('Productos');

    const changeState = () => {
        if (butonState === "Productos") {
            setButonState("Autores")

        } else {
            setButonState("Productos")
        }
    }

    return(
        <main id='product_wall' style={{ backgroundImage: `url(${fond})` }}>
            <aside>
                <div>
                    <h2>Filtro: </h2>
                    <button onClick={changeState} className='logout_btn'>{butonState}</button>
                </div>
                <form className='form_filter'>
                    <p>Nombre:</p>
                    <input className='text_filter' type='text' placeholder='Nombre'/>
                    <p>Autor:</p>
                    <input className='text_filter' type='text' placeholder='Autor'/>
                    <p> <input type='checkbox'/>En existencia</p>
                    <p><input type='checkbox'/> En descuento</p>
                    <p>Costo:</p>
                    <input className='text_filter' type='text' placeholder='Minimo'/>
                    <p/>
                    <input className='text_filter' type='text' placeholder='Maximo'/>
                </form>
                <button className='logout_btn serch_btn'>Buscar</button>
            </aside>
            <section className='section__wall'>
                {
                    butonState === "Productos" 
                    ? <CompShowDesBooks/> 
                    : <CompShowAllAutors/>
                }
                
            </section>
        </main>
    )
}
export default ProductWall