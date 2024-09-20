import React from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import  CompCreateUser  from '../backend/CreateUser.js'
import { useNavigate } from 'react-router-dom'


function Register({ setUSer }){
    const navigate = useNavigate();

    const changeForm = () => {
        navigate('/Login')
    }
   
    return(
        <main id='main__reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <CompCreateUser setUSer={setUSer} />

            <nav>
                <button onClick={changeForm} className='hcange_form_btn'>Iniciar sesión</button>
            </nav>
        </main>
    )
}
export default Register