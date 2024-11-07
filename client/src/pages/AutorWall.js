import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CompAllAutors, FormAutorFilter } from '../backend'
import fond from '../img/fond/loginfondo.png';
import './css/product_wall.css'

export default function AutorWall() {
    const navigate = useNavigate()

    const changeState = () => {
        navigate('/ProductWall');
    }

    return(
        <main id='product_wall' style={{ backgroundImage: `url(${fond})` }}>
            <aside className='aside_filter'>
                <h2>Filtro: <button onClick={changeState} className='serch_btn'>Autores</button></h2>
                <FormAutorFilter/>
            </aside>
            <section className='section_wall'> 
                <CompAllAutors/>
            </section>
        </main>
    )
}