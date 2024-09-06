import React from 'react'
import './css/mail_register.css'
import { ImgButton } from '../'

export default function MailRegister({ Img, id, url, imgDesc }) {
    return (
        <section className="section__contact light_up">
            <h2>Contáctenos:</h2>
            <div>
                <div className="div__contact">
                    <input type="email" placeholder="example@gmail.com" />
                    <button className="btn__mail">Unirse</button>
                </div>
                <div>
                    <ImgButton 
                        id={id}
                        imgURL={Img}
                        imgDesc={imgDesc}
                        URL={url}
                    />
                </div>
            </div>
            <p>Al unirse acepta recibir correos publicitarios de nuestra parte</p>
        </section>
    )
}