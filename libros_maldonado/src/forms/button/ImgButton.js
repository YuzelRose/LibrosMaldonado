import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/img_buttons.css'

export default function ImgButton({imgURL,imgDesc,URL,id}){
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(URL);
    };
    return(
        <button className='imgBtn' id={id} onClick={navigateTo}>
           <img src={imgURL} alt={imgDesc} />
        </button>
    )
}