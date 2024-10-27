import React  from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import {FormLogin} from '../backend'

export default function Login() {

    return (
        <main id='main_reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <FormLogin />
        </main>
    );
}