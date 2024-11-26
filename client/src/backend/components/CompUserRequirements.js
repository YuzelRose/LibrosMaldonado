import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import PayPalButton from '../Paypal/PayPalButton.js';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Usuarios/find`;
const URI_UPDATE = `${URI_START}/LibMal/Usuarios/updatedata`;

export default function CompUserRequirements() {
    const navigate = useNavigate();
    const { authUser } = useAuth();
    const [hasDirection, setHasDirection] = useState(false);
    const [correct, setCorrect] = useState(false);

    const [res, setRes] = useState([]);

    const [estado, setEstado] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [colonia, setColonia] = useState('');
    const [calle, setCalle] = useState('');
    const [numExterior, setNumExterior] = useState('');
    const [numInterior, setNumInterior] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [fullAdress, setFullAdress] = useState('');

    useEffect(()=> {
        getUserData();
    },[]);

    const getUserData = async () => {
        try {
            const response = await axios.get(`${URI}/${authUser}`); 
            const userData = response.data;
            
            setRes(userData); 
            
            if (userData.Direccion === 'no dada') {
                setHasDirection(false);
            } else {
                setHasDirection(true);
                setCorrect(true);
                setFullAdress(userData.Direccion); 
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
            navigate('/'); 
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
                alert('Rellene todos los datos de su nueva dirección');
            }
        }
    }
    
    const updateDirection = async (e) => {
        e.preventDefault();
        alert('Procesando...');
        newAdress()
        try {
            const response = await axios.put(`${URI_UPDATE}/${authUser}`, {
                direccion: fullAdress,
            });

            if (response.status === 200) {
                alert('Informacion Actualizada');
                setCorrect(true);
                getUserData();
            }
        } catch (error) {
            alert('Error al guardar su direccion.');
        }
    };

    const extendDirection = () => {
        setHasDirection(!hasDirection)
    };

    return (
        <>
            <p className='data_fild data_fild_opc' onClick={extendDirection}>Ingrese o revise su direccion: </p>
            <h1 id='direction'>{res.Direccion}</h1>
            { hasDirection ? null : 
                <form id='form_get_direction' onSubmit={updateDirection}>
                    <p>Estado: <input required className='input_edit_user' type="text" placeholder="Jalisco" value={estado} onChange={(e) => {setEstado(e.target.value);}} /></p>
                    <p>Ciudad: <input required className='input_edit_user' type="text" placeholder="Guadalajara" value={ciudad} onChange={(e) => {setCiudad(e.target.value);}} /></p>
                    <p>Colonia: <input required className='input_edit_user' type="text" placeholder="Atlas" value={colonia} onChange={(e) => {setColonia(e.target.value);}} /></p>
                    <p>Calle: <input required className='input_edit_user' type="text" placeholder="Olimpica" value={calle} onChange={(e) => {setCalle(e.target.value);}} /></p>
                    <p>N. Exterior: <input required title='Numero exterior' className='input_edit_user' type="text" placeholder="4325" value={numExterior} onChange={(e) => {setNumExterior(e.target.value); }} /></p>
                    <p>N. Interior: <input title='Numero exterior' className='input_edit_user' type="text" placeholder="(Opcional)" value={numInterior} onChange={(e) => {setNumInterior(e.target.value); }} /></p>
                    <p>CP: <input required title='Código postal' className='input_edit_user' type="text" placeholder="44873" value={codigoPostal} onChange={(e) => {setCodigoPostal(e.target.value); }} /></p>
                    <button type="submit" id='is_correct'>Es correcto</button>
                </form>
            }   
            <p className='data_fild'>Metodo de pago:</p>
            { correct ?  <PayPalButton /> : null } 
        </>
    );
}