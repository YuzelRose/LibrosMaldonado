import React, { useState } from 'react'
import './autor_page_obj.css'
import def from '../../img/svg/defaultmark.svg'; 


export default function AutorPageObj({URLAutImg, AutorName, AutorDescription}){
    const [show, setShow] = useState(false);

    const changeState = () => {
        setShow(prevChange => !prevChange);
    }

    return(
        <section id='wrapper_autor_info'>
            <figure id='autor_img'>
                {
                    URLAutImg === "Default"
                    ? <img src={def} alt={AutorName} />
                    : <img src={URLAutImg} alt={AutorName} />
                }
            </figure>
            <figcaption id='autor_info'>
                <h1>{AutorName} <sup onClick={changeState} id='see_more'>Ver Informacion</sup></h1>
            </figcaption>
            {
                show ?
                    (
                        <pre id='autor_description'>
                            {AutorDescription}
                        </pre>
                    )
                : null
            }
            
        </section>
    )
}
