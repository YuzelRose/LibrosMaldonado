import React, { useState, useEffect } from 'react';
import axios from "axios";
const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI_GET = `${URI_START}/LibMal/NewUser/GetNewUser`;
const URI_SET = `${URI_START}/LibMal/Usuarios/create`;

function CompNewUser({key}) {
    const [resul, setResul] = useState('Token no encontrado');

    useEffect(() => {
        getNewUser();
    }, []);

    const getNewUser = async () => {
        try {
            const res = await axios.get(`${URI_GET}/${key}`);
        } catch (error) {
            if (error.response) {
                setResul('Error de respuesta');
            } else if (error.request) {
                setResul('Error de solicitud');
            } else {
                setResul('Error:', error.message);
            }
        }
    }

    return(
        <section id='result_section'>
            <h1>{resul}</h1>
            <h2>Puede cerrar esta pagina</h2>
        </section>
    )
}
export default CompNewUser