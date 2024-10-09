import React from 'react'
import './css/autor_obj.css'
import { useNavigate } from 'react-router-dom';
import def from '../../img/svg/defaultmark.svg'; 

export default function AutorObj({name, imgURL}){
    const navigate = useNavigate();

    const toWriterPage = () => {
        navigate('/Writer');
    };

    return(
        <article className='autor_icon'>
            <figure className='autor' >
                {
                    imgURL === "Default"
                    ? <img src={def} alt={name} onClick={toWriterPage}/>
                    : <img src={imgURL} alt={name} onClick={toWriterPage}/>
                }
            </figure>
            <p onClick={toWriterPage}>{name}</p>
        </article>
        
    )
}