import { useNavigate } from 'react-router-dom';
import React from 'react'
import './css/navigation.css'

export default function Navigation() {
    const navigate = useNavigate();
    const redirectHome = () => {
        navigate('/');
    };
    const redirectProductWall = () => {
        navigate('/ProductWall');
    };
    return(
        <>
            <div className='highlight nav_opc' onClick={redirectHome}>
                <p>Inicio</p>
            </div>
            <div className="highlight nav_opc" onClick={redirectProductWall}>
                <p>Libros</p>
            </div>
            <div className="highlight nav_opc" onClick={redirectProductWall}>
                <p>Autores</p>
            </div>
            <div className="highlight nav_opc" onClick={redirectProductWall}>
                <p>Promos</p>
            </div>
        </>
    )
}