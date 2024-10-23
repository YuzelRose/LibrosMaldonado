import React from 'react';
import './css/img_buttons.css'

export default function ImgButton({imgURL,imgDesc,URL,id}){

    const navigateTo = () => {
        window.location.href = URL
    };
    return(
        <button className='imgBtn' id={id} onClick={navigateTo}>
           <img src={imgURL} alt={imgDesc} />
        </button>
    )
}