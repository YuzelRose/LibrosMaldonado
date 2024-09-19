import React from 'react'
import { useParams } from 'react-router-dom'; 
import CompProductPage from '../backend/ProductPage.js';
import './css/product_sell.css'
import fond from '../img/fond/loginfondo.png';
import CompShowDesBooks from '../backend/BookWall.js';

 
export default function ProductSell(){
    const { id } = useParams(); 
    return(
        <main id='main_product_sell' style={{ backgroundImage: `url(${fond})` }}>
            <CompProductPage id={id}/>
            <section className='section_recomendations'>
                <div>
                    <h2>Otros libros</h2>
                </div>
                <CompShowDesBooks/>
            </section>
        </main>
    )
}
