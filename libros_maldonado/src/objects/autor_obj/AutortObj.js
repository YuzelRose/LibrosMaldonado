import React from 'react'
import './css/autor_obj.css'
import { useNavigate } from 'react-router-dom';

export default function AutorObj({name, imgURL}){
    const navigate = useNavigate();

    const toWriterPage = () => {
        navigate('/Writer');
    };

    return(
        <article className='autor_icon'>
            <figure className='autor' >
                <img src={imgURL} alt={name} onClick={toWriterPage}/>
            </figure>
            <p onClick={toWriterPage}>{name}</p>
        </article>
        
    )
}