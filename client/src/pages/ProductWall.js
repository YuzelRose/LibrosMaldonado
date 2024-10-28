import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import {CompAllAutors, CompBookWall, FormBookFilter, FormAutorFilter} from '../backend'
import fond from '../img/fond/loginfondo.png';
import './css/product_wall.css'

function ProductWall() {
    const [butonState, setButonState] = useState('Productos');
    const { name } = useParams(); 
    

    const changeState = () => {
        if (butonState === "Productos") {
            setButonState("Autores")
        } else {
            setButonState("Productos")
        }
    }

    return(
        <main id='product_wall' style={{ backgroundImage: `url(${fond})` }}>
            <aside className='aside_filter'>
                    <h2>Filtro: <button onClick={changeState} className='serch_btn'>{butonState}</button></h2>
                {
                    butonState === "Productos"
                    ? <FormBookFilter/>
                    : <FormAutorFilter/>
                }
            </aside>
            <section className='section_wall'>
                {
                    butonState === "Productos" 
                    ? <CompBookWall name={name} /> 
                    : <CompAllAutors/>
                }
            </section>
        </main>
    )
}
export default ProductWall