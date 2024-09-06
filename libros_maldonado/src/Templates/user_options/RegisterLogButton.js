import { useNavigate } from 'react-router-dom'
import React from 'react'
import './css/register_log_button.css'

export default function RegisterLogButton() {
    const navigate = useNavigate();
    const redirectLogin = () => {
        navigate('/Login');
    };
    const redirectRegister = () => {
        navigate('/Register');
    };
    return(
        <div class="div__reg_log_wrapper">
            <div class="div__reg_log">
                <button onClick={redirectLogin} class="button__ini_reg">Acceder</button>
                <button onClick={redirectRegister} class="button__reg">Registrarse</button>
                <button onClick={redirectLogin} class="button__ini">Iniciar sesión</button>
            </div>
        </div>
    )
}

