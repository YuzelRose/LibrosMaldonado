import React, { useState } from 'react';
import './css/form_user_info.css';
import axios from 'axios';
import { useAuth } from "../utils/AuthContext";
const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/AlterUser`;
const URI_UPDATE = `${URI_START}/LibMal/Usuarios/updatedata`;


const FormAlterUser = ({ mail }) => {
    const { setAuthUserName } = useAuth();
    const [fullAdress, setFullAdress] = useState('');

    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    
    const [change, setChange] = useState(false);
    
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const [estado, setEstado] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [colonia, setColonia] = useState('');
    const [calle, setCalle] = useState('');
    const [numExterior, setNumExterior] = useState('');
    const [numInterior, setNumInterior] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');

    const changestate = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setChange(true);
    };    

    const dropCount = async () => {
        try {
            setStatus('');
            setMessage('Procesando solicitud');
            const response = await axios.post(`${URI}/Drop`, {
                Correo: mail
            });
            setMessage(response.data.message);
            setStatus('message_ok');
            setMessage('Revise su correo para terminar la acción');
            alert('Revise su correo para terminar la acción');
        } catch (error) {
            setStatus('message_error');
            setMessage('Error al enviar el correo.');
            alert('Hubo un error al enviar el correo, compruebe si ya a resivido un correo o intentelo mas tarde.');
        }
    };

    const updatePass = async () => {
        try {
            setStatus('');
            setMessage('Procesando solicitud');
            await axios.post(`${URI}/Pass`, {
                Correo: mail
            });
            setStatus('message_ok');
            setMessage('Revise su correo para terminar la acción');
            alert('Revise su correo para terminar la acción');
        } catch (error) {
            setStatus('message_error');
            setMessage('Error al enviar el correo.');
            alert('Hubo un error al enviar el correo, compruebe si ya a resivido un correo o intentelo mas tarde.');
        }
    };

    const newAdress = () => {
        if (estado || ciudad || colonia || calle || numExterior || codigoPostal) {
            if (estado && ciudad && colonia && calle && numExterior && codigoPostal) {
                if (numInterior) {
                    setFullAdress(`${ciudad}, ${estado}, Col. ${colonia}, ${calle}, No. ${numExterior}, Int. ${numInterior}, CP: ${codigoPostal}`);
                }
                else {
                    setFullAdress(`${ciudad}, ${estado}, Col. ${colonia}, ${calle}, No. ${numExterior}, CP: ${codigoPostal}`);
                }
            } else {
                setStatus('message_error');
                setMessage('Rellene todos los datos de su nueva dirección');
            }
        }
    }
    
    const updateCount = async (e) => {
        e.preventDefault();
        setStatus('');
        setMessage('Procesando su peticion');
        newAdress()
        try {
            const response = await axios.put(`${URI_UPDATE}/${mail}`, {
                nombre: nombre, 
                telefono: telefono,
                direccion: fullAdress,
            });

            if (response.status === 200) {
                alert('Informacion Actualizada');
                setStatus('message_ok');
                setMessage('Informacion Actualizada.');
                if (nombre) setAuthUserName(nombre);
                setChange(false);
            }
        } catch (error) {
            alert('Error al actualizar su información');
            setStatus('message_error');
            setMessage('No se pudo actualizar la Informacion.');
        }
    };

    return (
        <section id='opc_edit_user' className='user_conteiner'>
            <form id='form_edit_user' onSubmit={updateCount}>
                <h1>¿Desea cambiar sus datos? <span className={`message ${status}`} >{message}</span></h1>
                <p className='line'></p>
                <p>Nombre: <input className='input_edit_user' type="text" placeholder='Nombre' onChange={(e) => {setNombre(e.target.value); changestate(e);}} /></p>
                <p>Teléfono: <input className='input_edit_user' type="text" placeholder='Teléfono' onChange={(e) => {setTelefono(e.target.value); changestate(e);}} /></p>
                <p className='line'></p>
                <p>Dirección:</p>
                <ul id='edit_user_direcction_list'>
                    <li>Estado: <input className='input_edit_user' type="text" placeholder="Jalisco" value={estado} onChange={(e) => {setEstado(e.target.value); changestate(e);}} /></li>
                    <li>Ciudad: <input className='input_edit_user' type="text" placeholder="Guadalajara" value={ciudad} onChange={(e) => {setCiudad(e.target.value); changestate(e);}} /></li>
                    <li>Colonia: <input className='input_edit_user' type="text" placeholder="Atlas" value={colonia} onChange={(e) => {setColonia(e.target.value); changestate(e);}} /></li>
                    <li>Calle: <input className='input_edit_user' type="text" placeholder="Olimpica" value={calle} onChange={(e) => {setCalle(e.target.value);changestate(e);}} /></li>
                    <li>N. Exterior: <input title='Numero exterior' className='input_edit_user' type="text" placeholder="4325" value={numExterior} onChange={(e) => {setNumExterior(e.target.value); changestate(e);}} /></li>
                    <li>N. Interior: <input title='Numero exterior' className='input_edit_user' type="text" placeholder="(Opcional)" value={numInterior} onChange={(e) => {setNumInterior(e.target.value); changestate(e);}} /></li>
                    <li>CP: <input title='Código postal' className='input_edit_user' type="text" placeholder="44873" value={codigoPostal} onChange={(e) => {setCodigoPostal(e.target.value); changestate(e);}} /></li>
                </ul>
                {
                    change ? (
                        <>
                            <h1>¡Advertencia!</h1>
                            <h1>Se alteraran los datos de su cuenta</h1>
                            <button type="submit" className='button_edit_user'>Guardar cambios</button>
                        </>
                    ) : null
                }
            </form>
            <button onClick={updatePass} className='button_edit_user' title='Se le enviará un correo de confirmación'id='change_user_pass'>Cambiar contraseña</button>
            <button type='button' onClick={dropCount} className='button_edit_user' id='button_last_opc' title='Se le enviará un correo de confirmación'>Eliminar cuenta</button>
        </section>
    );
};

export default FormAlterUser;