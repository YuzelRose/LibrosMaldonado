import React, { useEffect, useState } from "react";
import axios from "axios";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI = `${URI_START}/LibMal/Usuarios/find`;

const CompUserdata = ({ mail }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${URI}/${mail}`);
                setNombre(response.data.Nombre);
                setCorreo(response.data.Correo);
                setTelefono(response.data.Telefono);
                setDireccion(response.data.Direccion);
            } catch (error) {
                alert(error);
            }
        };

        getUserData();
    }, [mail]);

    return (
        <ul id="user_data_display" className='user_conteiner user_info_list'>
            <li><h1>Nombre:</h1><h1>{nombre}</h1></li>
            <li className='line' />
            <li><h1>Correo:</h1><h1>{correo}</h1></li>
            <li className='line' />
            <li><h1>Teléfono:</h1><h1>{telefono}</h1></li>
            <li className='line' />
            <li><h1>Dirección:</h1></li>
            <li><h1>{direccion}</h1></li>
        </ul>
    );
};

export default CompUserdata;
