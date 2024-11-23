import React, { useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import { PermitAuth } from "../utils/PermitAuth";
import './css/admin_styles.css';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI = `${URI_START}/LibMal/Access/EncodeTalker`;
const URI_PERMIT = `${URI_START}/LibMal/Access/ExcodeTalker`;

export default function GetPermit() {
    const { tok } = useParams();
    const { setToken } = PermitAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (tok) {
            isPermited(); 
        }
    }, [tok]);  

    const isPermited = async () => {
        try {
            const response = await axios.get(`${URI_PERMIT}/${tok}`);
            setToken(response.data);  
            alert('Permiso concedido.');
            navigate('/admin/DashBord')
        } catch(error) {
            alert(`Error: ${error.message}`);
        }
    };

    const sendPermit = async (event) => {
        event.stopPropagation(); 
        alert('Procesando');
        try {
            await axios.post(URI);
            alert('Confirmación enviada.');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return(
        <>
            <main className="admin_main">
                <section id="get_permit" onClick={sendPermit}>
                    <p onClick={sendPermit}>Solicitar permiso</p>
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'admin/get-permision'} className="link">get-permision</Link></p>
            </footer>
        </>
    );
}
