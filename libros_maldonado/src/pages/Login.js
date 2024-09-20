import React  from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import LoginForm from '../backend/LoginForm.js'
import { useNavigate } from 'react-router-dom'


export default function Login({ setUSer }) {
    const navigate = useNavigate();

    const changeForm = () => {
        navigate('/Register')
    }

    return (
        <main id='main__reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <LoginForm setUSer={setUSer}/>

            <nav>
                <button onClick={changeForm} className='hcange_form_btn'>Registro</button>
            </nav>
        </main>
    );
}