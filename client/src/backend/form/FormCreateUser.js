import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/NewUser/createNewUser`;

const FormCreateUser = () => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState(false);

    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState(false);

    const [agree, setAgree] = useState(false);
    const [agreeError, setAgreeError] = useState(false);


    const create = async () => {
        try {
            await axios.post(URI, {
                Nombre: name,
                Correo: mail,
                Contrasena: pass,
            });
            alert('Correo enviado exitosamente, revise su bandeja para completar su registro.');
        } catch (error) {
            if (error.response) {
                alert('Hubo un error, verifique si ya se le envio un correo con anterioridad o intentelo mas tarde.');
            } else {
                alert('Hubo un error al enviar la solicitud.');
            }
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mail === "" || pass === "" || name === "" || !agree) {
            if (!agree) setAgreeError(true);
            if (name === "") setNameError(true);
            if (mail === "") setMailError(true);
            if (pass === "") setPassError(true);
            return;
        } 
        setAgreeError(false);
        setNameError(false);
        setMailError(false);
        setPassError(false);
        create();
    };

    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked); 
        if (e.target.checked) {
            setAgreeError(false); 
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
        <section className='section_reg_log'>
            <form className='form_reg_log' onSubmit={handleSubmit}>
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
                <p className='check_opc'>
                    <input className="checkbox" type="checkbox" checked={agree} onChange={handleCheckboxChange}/>Acepto los <Link to={'/Faq'} className="blue_link">terminos de servicio</Link>
                </p>
                {agreeError && <sup>Debe aceptar los terminos y condiciones</sup>}
                <button className='sub_button' id="create_btn" type="submit" value="Enviar">Registrarse</button>
            </form>
            <p>¿Ya tiene cuenta? <Link className='blue_link' to={'/Login'}>Iniciar sesion</Link></p>
        </section>
    )
}

export default FormCreateUser;