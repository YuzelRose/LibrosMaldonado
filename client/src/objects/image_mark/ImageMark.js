import { useNavigate } from 'react-router-dom';
import React from 'react'
import './image_mark.css'

export default function ImageMark({imgURL,URL,alt}){
    const navigate = useNavigate();
    const redirectIMG = () => {
        navigate(URL);
    };
    return(
        <section onClick={redirectIMG} className='section__nav_wrapper'>
            <img src={imgURL} alt={alt}/>
        </section>
    )
}