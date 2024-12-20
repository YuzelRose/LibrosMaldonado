import React from 'react'
import './css/footer.css'
import instagram from '../img/svg/intagram.svg';
import whatsapp from '../img/svg/whatsapp.svg';
import facebook from '../img/svg/facebook.svg';
import { MailRegister } from '../forms';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer>
            <h2>Siguenos en nuestras redes:</h2>
            <section className='section__side_networks'>
                <figure className='light_up_flash network__icon'>
                    <img src={instagram} alt="Buscar"/>
                </figure>
                <figure className='light_up_flash network__icon' onClick={() => window.location.href = 
                'https://www.facebook.com/profile.php?id=100063913577531'}>
                    <img src={facebook} alt="Buscar"/>
                </figure>
            </section>
            <h2>¿No encuentra lo que busca?</h2>
            <section className='section__info' id='contact_info'>
                <MailRegister
                    Img={whatsapp}
                    id='whatsapp__btn'
                    url='https://api.whatsapp.com/send/?phone=523310085944&text&type=phone_number&app_absent=0'
                    imgDesc='Nuestro whatsapp'
                />  
            </section> 
            <section className='section_bottom'>
                <h3>©2024 Libros medicos Maldonado, a su sevicio desde 1968. Todos los derechos reservados.</h3>
                <p><Link to="/faq#privacidad" className='link_low'>Política de privacidad</Link> | <Link to="/faq#terminos_condiciones" className='link_low'>Términos y condiciones </Link></p>
                <p>Metodos de pago aceptados:</p>
                <p><img src="https://www.paypalobjects.com/webstatic/es_MX/mktg/logos-buttons/grey_btn-356x42.png" alt="PayPal Credit" /></p>
                <p>
                    Los productos presentados en este sitio se encuentran disponibles para todo MÉXICO, cualquier compra externa a este pais sera cancelada, segun nuestras <Link to="/faq#terminos_condiciones" className='link_low'>politicas de envios</Link>, en caso de dudas puede contactarnos mediante nuestro sistema de ayuda al cliente, este fragmento fue actualizado por ultima vez el 25 de Noviembre de 2024. 
                </p>
            </section>
            
        </footer>
    )
}