import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from './logo/LogoSvg';
import { LogOptions, RegisterLogButton } from './user_options'
import { SerchBar } from '../forms';
import { Navigation } from '../navigation';
import { useAuth } from '../backend/utils/AuthContext';
import './css/header.css';

export default function Header() {
    const {isLogged} = useAuth()
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            setHeaderVisible(false);
        } else {
            setHeaderVisible(true);
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={`${headerVisible ? 'header_visible' : 'header_hidden'}`}>
            <section id='top_header'>
                <figure id='top_logo'>
                    <LogoSvg />
                </figure>
                <div id='top_opc'>
                    <p>
                        <Link className='link' to={'/'} title='Inicio'>Libros Maldonado</Link> a su servicio desde 1968
                    </p>
                    <nav id='top_nav'>
                        <a href="#contact_info" className="link underline">Contactos</a>
                        <Link to='/Faq' className="link underline">Faqs</Link>
                    </nav>
                </div>
            </section>
            <section id='bottom_header'>
                <figure id='logo'/>
                <section id='serch_bar'>
                    <SerchBar />
                </section>
                <section id='log_opc'>
                    {
                        isLogged 
                        ? <LogOptions />
                        : <RegisterLogButton /> 
                    }
                </section>
                <nav id='bottom_nav'>
                    <Navigation />
                </nav>
            </section>
        </header>
    );
}