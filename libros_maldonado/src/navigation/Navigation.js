import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import './css/navigation.css'

export default function Navigation(){
    const navigate = useNavigate();
    const redirectHome = () => {
        navigate('/');
    };
    const redirectProductWall = () => {
        navigate('/ProductWall');
    };
    return(
        <section className='section__nav_wrapper'>
            <nav className='nav__Header'>
                <div className='highlight' onClick={redirectHome}>
                    <Link class="link" to='/'>Inicio</Link>
                </div>
                <div class="highlight" onClick={redirectProductWall}>
                    <Link class="link" to='/ProductWall'>Libros</Link>
                </div>
                <div class="highlight" onClick={redirectProductWall}>
                    <Link class="link" to='/ProductWall'>Autores</Link>
                </div>
                <div class="highlight" onClick={redirectProductWall}>
                    <Link class="link" to='/ProductWall'>Promociones</Link>
                </div>
            </nav>
        </section>
    )
}