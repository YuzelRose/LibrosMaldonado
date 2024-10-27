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
        <>
            <button onClick={redirectLogin} id="button__ini_reg">Acceder</button>
            <button onClick={redirectRegister} id="button__reg">Registrarse</button>
            <button onClick={redirectLogin} id="button__ini">Iniciar sesión</button>
        </>
    )
}

