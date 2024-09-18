import React, { useEffect, useState } from 'react';

import './css/product_wall.css'
import CompShowDesBooks from '../backend/BookWall.js'

function ProductWall(){
    const [butonState, setButonState] = useState('Productos');

    return(
        <main id='product_wall'>
            <aside>
                <button className='logout_btn state_btn'>{butonState}</button>
                <h2>Filtros</h2>
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
            </aside>
            <section className='section__wall'>
                <CompShowDesBooks/> 
            </section>
        </main>
    )
}
export default ProductWall