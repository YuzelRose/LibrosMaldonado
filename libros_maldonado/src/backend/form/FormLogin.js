import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initData } from "../utils/JsonUtils";
import { useAuth } from "../utils/AuthContext";


const URI = 'http://localhost:5000/LibMal/Usuarios/login';

const FormLogin = () => {
    const { setAuthUser, setIsLogged } = useAuth();
    const navigate = useNavigate();

    const [agree, setAgree] = useState(false);


    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState(false);

    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState(false);

    const [error, setError] = useState("");

    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked); 
    };

    const changeForm = () => {
        navigate('/Register')
    }

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
            
            localStorage.setItem('userSession', initData());

            setAuthUser(user.Correo);
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
        <section className="section_reg_log">
            <form className="form_reg_log" onSubmit={handleSubmit}>
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
                <p className='check_opc'>
                    <input className="checkbox" type="checkbox" checked={agree} onChange={handleCheckboxChange}/>
                    Mantner sesion iniciada <sup><Link className="blue_link" to={'/faq'}>Terminos</Link></sup>
                </p>
                <button className='sub_button' id='log_btn' type="submit">Iniciar sesión </button>
                {error && <p className='error'>{error}</p>}
            </form>
            <p>¿No tiene cuenta? <Link className='blue_link' to={'/Register'}>Registrarse</Link></p>
        </section>
    );
};

export default FormLogin;