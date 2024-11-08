import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI_GET = `${URI_START}/LibMal/NewUser/GetNewUser`;

const CompNewUser = ({ userKey }) => {
    const navigate = useNavigate();
    const [resul, setResul] = useState('Procesando su solicitud');
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (userKey) {
            getNewUser();
        }
    }, [userKey]); 


    const getNewUser = async () => {
        if (isProcessing) return; 
        setIsProcessing(true);

        try {
            const res = await axios.get(`${URI_GET}/${userKey}`);
            if (res.data && res.data.Nombre) {
                alert(`Usuario ${res.data.Nombre} creado correctamente.`);
                navigate('/Login');
            } else {
                setResul('Datos de usuario no recibidos correctamente');
            }
        } catch (error) {
            if (error.response) {
                setResul(`Error de respuesta: ${error.response.statusText}.`);
            } else if (error.request) {
                setResul(`Error de solicitud: No se recibió respuesta del servidor. Detalle: ${error.request}`);
            } else {
                setResul(`Error en la solicitud: ${error.message}`);
            }
        } finally {
            setIsProcessing(false); 
        }
    };

    

    return (
        <section id='result_section'>
            <h1>{resul}</h1>
        </section>
    );
};

export default CompNewUser;