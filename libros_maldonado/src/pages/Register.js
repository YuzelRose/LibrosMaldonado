import React, { useState } from 'react';
import './css/log_reg.css';
import { useNavigate } from 'react-router-dom';
import fond from '../img/fond/loginfondo.png';

function Register({ setUSer }){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState(false);

    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState(false);

    const [keepSession, setKeepSession] = useState(false);


    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mail === "" || pass === "") {
            setError(true);
            if (name === "") setNameError(true);
            if (mail === "") setMailError(true);
            if (pass === "") setPassError(true);
            return;
        }
        setError(false);
        setNameError(false);
        setMailError(false);
        setPassError(false);
        if (keepSession) {
            setUSer([mail])
            navigate('/');
        } else {
            navigate('/Login');
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (e.target.value !== "") {
            setNameError(false);
        }
    };

    const handleMailChange = (e) => {
        setMail(e.target.value);
        if (e.target.value !== "") {
            setMailError(false);
        }
    };

    const handlePassChange = (e) => {
        setPass(e.target.value);
        if (e.target.value !== "") {
            setPassError(false);
        }
    };
    return(
        <main id='main__reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <form className='form__reg_log' onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <p>Nombre:</p>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={() => { if (name === "") setNameError(true); }}
                />
                {nameError && <sup>Error en el campo</sup>}
                <p>Correo:</p>
                <input
                    type="email"
                    value={mail}
                    onChange={handleMailChange}
                    onBlur={() => { if (mail === "") setMailError(true); }}
                />
                {mailError && <sup>Error en el campo</sup>}
                <p>Contraseña:</p>
                <input
                    type="password"
                    value={pass}
                    onChange={handlePassChange}
                    onBlur={() => { if (pass === "") setPassError(true); }}
                />
                {passError && <sup>Error en el campo</sup>}
                <p><input type="checkbox" onChange={(e) => setKeepSession(e.target.checked)}/> Iniciar sesión</p>
                <button type="submit" value="Enviar">Registrarse</button>
            </form>
        </main>
    )
}
export default Register