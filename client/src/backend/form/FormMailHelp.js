import React, { useState } from 'react';
import axios from 'axios';
import send from  '../../img/svg/send.svg';
const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Mail/Help`;

const FormMailHelp = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(URI, {
                email
            });

            setMessage(response.data.message);
        } catch (error) {
            setMessage(`Hubo un error al enviar el correo.`);
        }
    };


    return (
        <form id="mail_help" onSubmit={handleSubmit}>
            <div>
                <input id='in_from' type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" required />
                <button id="btn_mail">
                    <img src={send} alt='Enviar' title="Enviar" />
                </button>
            </div>
            <p>{message}</p>
        </form>
    );
};

export default FormMailHelp;