import React from 'react'
import './css/mail_register.css'
import { ImgButton } from '..'
import { FormMailHelp } from '../../backend'

export default function MailRegister({ Img, id, url, imgDesc }) {
    return (
        <section className="section_contact">
            <h2>Contáctenos:</h2>
            <section>
                <FormMailHelp />
                <div>
                    <ImgButton 
                        id={id}
                        imgURL={Img}
                        imgDesc={imgDesc}
                        URL={url}
                    />
                </div>
            </section>
            <p>Al introducir su correo aqui le enviaremos un correo desde: <span className='remarc'>librosmaldonado68@gmail.com</span></p>
        </section>
    )
}