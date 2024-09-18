import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:5000/LibrosMaldonado/Login/';

const LoginForm = ({ setUSer }) => {
    const navigate = useNavigate();
    const [log, setlog] = useState([]);

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

        handleLog()
        
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

    const handleLog  = async () => {
        try {
            const response = await axios.get(`${URI}${mail}`);
            if (response.data.length > 0) {
                const user = response.data[0];
                if (user.Contrasena === pass) {
                    setError('')
                    setUSer([mail])
                    navigate('/');
                } else {
                    setlog([]);
                    setError('Usuario no encontrado')
                }
            } else {
                setlog([]);
                setError('Usuario no encontrado')
            }
        } catch (error) {
            console.error("Error creating user:", error);
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
            {error && <p className='error'>{error}</p>}
        </form>
    )
}

export default LoginForm