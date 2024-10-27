import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import fond from '../img/fond/loginfondo.png';
import { TSDV, WaW, EEP, MdE } from './faqs';
import './css/faq.css';

export default function Faq() {
    const { sect } = useParams(); // Obtiene el valor del parámetro URL
    const [show, setShow] = useState(sect || ''); // Inicializa el estado con el valor de la URL si existe

    useEffect(() => {
        if (sect) {
            setShow(sect); // Asigna el valor de 'sect' al estado 'show'
        }
    }, [sect]); // Solo ejecuta el efecto cuando 'sect' cambia

    const handleTSDVClick = () => {
        setShow(prevShow => prevShow === 'TSDV' ? '' : 'TSDV');
    };

    const handleWaWClick = () => {
        setShow(prevShow => prevShow === 'WaW' ? '' : 'WaW');
    };

    const handleEEPClick = () => {
        setShow(prevShow => prevShow === 'EEP' ? '' : 'EEP');
    };

    const handleMdEClick = () => {
        setShow(prevShow => prevShow === 'MdE' ? '' : 'MdE');
    };

    return (
        <main id='main_faq' style={{ backgroundImage: `url(${fond})`}}>

            <section className='contents' id='WaW'>
                <article className='question' >
                    <p className='article_title'>
                        <span className='display_info' onClick={handleWaWClick}>¿Quiénes somos?</span>
                        <span>Última actualización: 22/10/2024</span>
                    </p>
                    {
                        show === 'WaW' ? (
                            <>
                                <WaW setShow={setShow}/>
                                <h1 onClick={handleWaWClick} className='close'>Cerrar</h1>
                            </>
                        ) : null
                    }
                </article>
            </section>

            <section className='contents' id='TSDV'>
                <article className='question' >
                    <p className='article_title'>
                        <span className='display_info' onClick={handleTSDVClick}>Términos de Servicio</span>
                        <span>Última actualización: 22/10/2024</span>
                    </p>
                    {
                        show === 'TSDV' ? (
                            <>
                                <TSDV setShow={setShow}/>
                                <h1 onClick={handleTSDVClick} className='close'>Cerrar</h1>
                            </>
                        ) : null
                    }
                </article>
            </section>

            <section className='contents' id='MdE'>
                <article className='question' >
                    <p className='article_title'>
                        <span className='display_info' onClick={handleMdEClick}>Métodos de entrega</span>
                        <span>Última actualización: 22/10/2024</span>
                    </p>
                    {
                        show === 'MdE' ? (
                            <>
                                <MdE setShow={setShow}/>
                                <h1 onClick={handleMdEClick} className='close'>Cerrar</h1>
                            </>
                        ) : null
                    }
                </article>
            </section>

            <section className='contents' id='EEP'>
                <article className='question'>
                    <p className='article_title'>
                        <span className='display_info' onClick={handleEEPClick}>¿Entregas en persona?</span>
                        <span>Última actualización: 22/10/2024</span>
                    </p>
                    {
                        show === 'EEP' ? (
                            <>
                                <EEP setShow={setShow}/>
                                <h1 onClick={handleEEPClick} className='close'>Cerrar</h1>
                            </>
                        ) : null
                    }
                </article>
            </section>

        </main>
    );
}
