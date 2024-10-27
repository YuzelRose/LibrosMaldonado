import React from 'react'
import './css/home_page.css'
import { ImageSwipe } from '../objects'
import { CompShowDesBooks, CompShowAutors, CompShowBestBooks } from '../backend'
import fond from '../img/fond/loginfondo.png';


export default function HomePage(){
    return(
        <main id='main_home_page' style={{ backgroundImage: `url(${fond})` }}>
            <ImageSwipe
                id='mainImSwp'
                urlImg=''
                alt=''
            />
            <CompShowAutors />        
            <CompShowBestBooks />
            <CompShowDesBooks />
        </main>
    )
}