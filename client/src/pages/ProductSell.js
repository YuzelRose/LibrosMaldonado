import React from 'react'
import { useParams } from 'react-router-dom'; 
import './css/product_sell.css'
import fond from '../img/fond/loginfondo.png';
import {CompBookWall, CompProductPage} from '../backend';

 
export default function ProductSell(){
    const { id } = useParams(); 
    return(
        <main id='main_product_sell' style={{ backgroundImage: `url(${fond})` }}>
            <CompProductPage id={id}/>
            <section className='section_recomendations'>
                <div>
                    <h2>Otros libros</h2>
                </div>
                <CompBookWall/>
            </section>
        </main>
    )
}
