import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:5000/LibrosMaldonado/Register';

const LoginForm = ({ setUSer }) => {
    const navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState(false);

    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState(false);

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mail === "" || pass === "") {
            setError(true);
            if (mail === "") setMailError(true);
            if (pass === "") setPassError(true);
            return;
        }
        setError(false);
        setMailError(false);
        setPassError(false);

        setUSer([mail])
        navigate('/');
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
        <form className="form__reg_log" onSubmit={handleSubmit}>
            <h1>Inicio de sesión</h1>
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
            <button id='log_btn' type="submit">Iniciar sesión</button>
            {error && <p className='error'>Campos erroneos</p>}
        </form>
    )
}

export default LoginForm