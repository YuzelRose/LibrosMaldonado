import { Link } from 'react-router-dom';
import React from 'react'
import './css/top_nav.css'

export default function TopNav(){
    return(
        <nav className='nav_wrapper'>
            <ul className='ul__top_nav'>
                <li><Link to="#mail_whastapp_contact" className="link underline">Contactos</Link></li>
                <li><Link to='/about' className="link underline">Sobre nosotros</Link></li>
                <li><Link to='/faq' className="link underline">Ayuda</Link></li>
            </ul>
        </nav>
    )
}