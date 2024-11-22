import axios from "axios";
import { useState } from "react";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Usuarios/login`;
const URI_DROP = `${URI_START}/LibMal/Usuarios/Drop`;


const FromConfimIdentity = () => {
    const [state, setState] = useState(true);

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
            
            if(user.Correo === mail) {
                await axios.post(`${URI_DROP}/${user.Correo}`);
                alert('Lamentamos su partida.');
                setState(false);
            }

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
            {   state ? (
                <form className="form_reg_log" onSubmit={handleSubmit}>
                    <h1>Confirme que decea eliminar su cuenta</h1>
                    <p>Correo:</p>
                    <input
                        type="email"
                        value={mail}
                        onChange={handleMailChange}
                        onBlur={() => { if (mail === "") setMailError(true); }}
                    />
                    {mailError && <sup>Rellene el campo</sup>}
                    <p>Contraseña:</p>
                    <input
                        type="password"
                        value={pass}
                        onChange={handlePassChange}
                        onBlur={() => { if (pass === "") setPassError(true); }}
                    />
                    {passError && <sup>Rellene el campo</sup>}
                    <p/>
                    <button className='sub_button' id='log_btn' type="submit">Eliminar cuenta</button>
                    {error && <p className='error'>{error}</p>}
                </form>
                ) : (
                    <h1>Puede cerrar esta pagina</h1>
                )
            }
        </section>
    );
};

export default FromConfimIdentity;