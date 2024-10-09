import React, { useState } from 'react';
import './css/product_wall.css'
import {CompAllAutors, CompBookWall, FormBookFilter, FormAutorFilter} from '../backend'
import fond from '../img/fond/loginfondo.png';
import { useParams } from 'react-router-dom'; 

function ProductWall(){
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
            <aside>
                <div>
                    <h2>Filtro: </h2>
                    <button onClick={changeState} className='logout_btn'>{butonState}</button>
                </div>
                {
                    butonState === "Productos"
                    ? <FormBookFilter/>
                    : <FormAutorFilter/>
                }
            </aside>
            <section className='section__wall'>
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