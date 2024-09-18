import React from 'react'
import './css/home_page.css'
import { ImageSwipe } from '../objects'
import { CompShowDesBooks, CompShowAutors, CompShowBestBooks } from '../backend'

export default function HomePage(){
    return(
        <main id='main_home_page'>
            <ImageSwipe
                id='mainImSwp'
                urlImg=''
                alt=''
            />
            <CompShowAutors/>        
            <CompShowBestBooks/>
            <CompShowDesBooks/>
        </main>
    )
}