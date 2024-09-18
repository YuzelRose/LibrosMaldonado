import React  from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import LoginForm from '../backend/LoginForm.js'

export default function Login({ setUSer }) {

    return (
        <main id='main__reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <LoginForm setUSer={setUSer}/>
        </main>
    );
}