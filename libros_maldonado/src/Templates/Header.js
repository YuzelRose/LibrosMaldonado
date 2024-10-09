import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/header.css';
import LogoSvg from './logo/LogoSvg';
import { LogOptions, RegisterLogButton } from './user_options'

import { SerchBar } from '../forms';
import { TopNav, Navigation } from '../navigation';
import { useAuth } from '../backend/utils/AuthContext';

export default function Header() {
    const {isLogged} = useAuth()
    const navigate = useNavigate();
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);

    const navigateLogoClick = () => {
        navigate('/');
    };

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
        <header className={`header ${headerVisible ? 'header--visible' : 'header--hidden'}`}>
            <section id='div__top'>
                <div className='logo__place' id='upper__logo' onClick={navigateLogoClick}>
                    <LogoSvg />
                </div>
                <section>
                    <TopNav />
                </section>
                <p>A su servicio desde 1968</p>
            </section>
            <div className='div__header'>
                <div className='div__logo'>
                    <div className='logo__place' id='down__logo' onClick={navigateLogoClick}>
                        <LogoSvg />
                    </div>
                </div>
                <div className='div__left'></div>
                <div className='div__right'></div>
                <div className='div__serch'>
                    <SerchBar />
                </div>
                <div className='div__log'>
                    {
                        isLogged 
                        ? <LogOptions />
                        : <RegisterLogButton /> 
                    }
                </div>
                <div className='div__nav'>
                    <Navigation />
                </div>
            </div>
        </header>
    );
}