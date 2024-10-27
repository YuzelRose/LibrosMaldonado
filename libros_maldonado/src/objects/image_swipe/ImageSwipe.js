import React from 'react'
import './image_swipe.css'

export default function ImageSwipe({id, urlImg, alt}){
    return(
        <section id={id} className='section_image_swipe'>
            <button>&lt;</button>
            <figure>
                <img src={urlImg} alt={alt}/>
            </figure>
            <button>&gt;</button>
        </section>
    )
}
