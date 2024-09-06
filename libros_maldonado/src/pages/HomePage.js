import React from 'react'
import './css/home_page.css'
import { ImageSwipe, Selection } from '../objects'

export default function HomePage(){
    return(
        <main>
            <ImageSwipe
                id=''
                urlImg=''
                alt=''
            />
            <article class="article_selection" id="selection_article">
                <div>
                    <h2>Nuestra seleccion</h2>
                </div>
                <Selection/>
                <button>Ver mas</button>
            </article>
            <article class="article_selection" id="selection_article">
                <div>
                    <h2>Sección de descuentos</h2>
                </div>
                <Selection/>
                <button>Ver mas</button>
            </article>
            <article class="article_selection" id="selection_article">
                <div>
                    <h2>Nuestros autores</h2>
                </div>
                <Selection/>
                <button>Ver mas</button>
            </article>
        </main>
    )
}