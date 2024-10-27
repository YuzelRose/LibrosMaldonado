import React from "react";

export default function EEP({setShow}) {
    const handleMdEClick = () => {
        setShow(prevShow => prevShow === 'MdE' ? '' : 'MdE');
    };
    return(
        <pre className='article_text'>
            <p>
                En caso de que usted se encuentre dentro del area metropolitana de Guadalajara Jalisco Mexico, podra solicitar una entrega en persona, con un miembro de nuestro equipo.
            </p>
            <p className='remarc'>
                No aplicable en cualquiero otro estado, nos guardamos el derecho de negar este servicio en casos espesificos.
            </p> 
            <p className='remarc'>
                Para mayor informacion consulte el punto: <a onClick={handleMdEClick} className="to_point" href="#MdE">Metodos de entrega</a>.
            </p> 
        </pre>
    );
}