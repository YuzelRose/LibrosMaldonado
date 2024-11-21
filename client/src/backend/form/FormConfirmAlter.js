import axios from "axios";
import { useState } from "react";
import FromConfimIdentity from './FromConfimIdentity.js'

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/AlterUser/getnset`;

const FormConfirmAlter = ({ operation, userKey }) => {

    const [process, setProcess] = useState(true);

    const [pass, setPass] = useState('');
    const [passState, setPassState] = useState('');
    const [passError, setPassError] = useState(false);

    const [pass2, setPass2] = useState('');
    const [pass2State, setPass2State] = useState('');
    const [pass2Error, setPass2Error] = useState(false);

    const [error, setError] = useState("");
    const [errorState, setErrorState] = useState(false);

    const handelUpdate = async () => {
        try {
            const res = await axios.post(`${URI}/${userKey}`, { Pass: pass });
            alert(res.data.message);
            setProcess(false);
        } catch (error) {
            alert(`Error al actualizar la contraseña ${error}`);
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( pass === pass2) {
            if (pass.length > 7 ){
                handelUpdate();
            } else {
                setErrorState(true);
                setError('La contraseña debe medir 8 caracteres minimo.');
            }
        } else {
            setErrorState(true);
            setError('Las contraseñas no coinciden.');
        } 
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
        if (e.target.value !== "") {
            setPassError(false);
            setPassState(true);
        }
    }

    const handlePass2Change = (e) => {
        setPass2(e.target.value);
        if (e.target.value !== "") {
            setPass2Error(false);
            setPass2State(true);

        }
    }


    return (
        <>
            { process ? (
                    <>
                        { operation === 'altp' ?
                            <section className="section_reg_log">
                                <form className="form_reg_log" onSubmit={handleSubmit}>
                                    <h1>Cambio de contraseña</h1>
                                    <p>Contraseña:</p>
                                    <input
                                        type="password"
                                        value={pass}
                                        onChange={handlePassChange}
                                        onBlur={() => { if (pass === "") setPassError(true); }}
                                    />
                                    {passError && <sup>Rellene el campo</sup>}
                                    <p>Confirmacion:</p>
                                    <input
                                        type="password"
                                        value={pass2}
                                        onChange={handlePass2Change}
                                        onBlur={() => { if (pass2 === "") setPass2Error(true); }}
                                    />
                                    {pass2Error && <sup>Rellene el campo</sup>}
                                    <p/>
                                    {   passState && pass2State ? 
                                        <sup>Se cambiara la contraseña de su cuenta</sup> 
                                        : null
                                    }
                                    <button className='sub_button' id='log_btn' type="submit">Confirmar</button>

                                    {errorState && <p className='error'>{error}</p>}
                                </form> 
                            </section>
                            : null
                        }
                        { operation === 'altd' ?
                                <FromConfimIdentity />
                            : null
                        }
                    </>
                ) : (
                    <div id="donde_div">
                        <h1>Puede cerrar esta pagina</h1>
                    </div>
                )
            }
        </>
    );
};

export default FormConfirmAlter;