import React from 'react'
import './css/home_page.css'
import { ImageSwipe } from '../objects'
import banner from '../img/banner.png';
import { CompShowDesBooks, CompShowAutors, CompShowBestBooks } from '../backend'
import fond from '../img/fond/loginfondo.png';

export default function HomePage(){
    return(
        <main id='main_home_page' style={{ backgroundImage: `url(${fond})` }}>
            <figure>
                <img id='banner_img' src={banner} alt="Libros Maldonado" title='A su servicio desde 1968'/>
            </figure>
            <CompShowAutors />        
            <CompShowBestBooks />
            <CompShowDesBooks />
        </main>
    )
}