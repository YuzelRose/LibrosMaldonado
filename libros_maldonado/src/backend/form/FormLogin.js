import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateXML } from "../utils/XMLUtils";
import { useAuth } from "../utils/AuthContext";

const URI = 'http://localhost:5000/LibMal/Usuarios/login';

const FormLogin = () => {
    const { setAuthUser, setIsLogged } = useAuth();
    const navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState(false);

    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mail === "" || pass === "") {
            setError("Por favor, complete todos los campos.");
            if (mail === "") setMailError(true);
            if (pass === "") setPassError(true);
            return;
        } else {
            setError("");
            setMailError(false);
            setPassError(false);
            handleLog();
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

    const handleLog = async () => {
        try {
            const response = await axios.post(URI, { Mail: mail, Pass: pass });
            
            const user = response.data;
            
            const userXML = generateXML(user);
            localStorage.setItem('userSession', userXML);

            setAuthUser(mail);
            setIsLogged(true);
            navigate('/');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            if (error.response) {
                if (error.response.status === 404 || error.response.status === 401) {
                    setError("Correo o contraseña incorrectos.");
                } else {
                    setError("Ocurrió un error. Inténtelo más tarde.");
                }
            } else {
                setError("Ocurrió un error. Inténtelo más tarde.");
            }
        }
    };

    return (
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
    );
};

export default FormLogin;
