import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
import { CompBookWall, FormBookFilter } from '../backend'
import fond from '../img/fond/loginfondo.png';
import './css/product_wall.css'

export default function ProductWall() {
    const navigate = useNavigate()
    const { name } = useParams(); 

    const changeState = () => {
        navigate('/AutorWall');
    }

    return(
        <main id='product_wall' style={{ backgroundImage: `url(${fond})` }}>
            <aside className='aside_filter'>
                <h2>Filtro: <button onClick={changeState} className='serch_btn'>Productos</button></h2>
                <FormBookFilter/>
            </aside>
            <section className='section_wall'>
                <CompBookWall name={name} /> 
            </section>
        </main>
    )
}