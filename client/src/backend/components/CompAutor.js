import axios from 'axios';
import { useState, useEffect } from 'react';
import { AutorPageObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop:5000'
const URI = `${URI_START}/LibMal/Autores/Exact/Name`;

const CompAutor = ({Name}) => {
    const [autor, setAutor] = useState([]);

    useEffect(() => {
        getAutors();
    }, []);

    const getAutors = async () => {
        try {
            const res = await axios.get(`${URI}/${Name}`);
            if (res.data) {
                setAutor(res.data);
            }
        } catch (error) {
            if (error.response) {
                console.log('Error de respuesta:', error.response.data);
            } else if (error.request) {
                console.log('Error de solicitud:', error.request);
            } else {
                console.log('Error:', error.message);
            }
        }
    };

    return (
        autor.length > 0 ? (
            <>
                {
                    autor.map((autor) => (
                        <AutorPageObj
                            key={autor._id}
                            URLAutImg={autor.URLImage}
                            AutorName={autor.Nombre}
                            AutorDescription={autor.Resumen}
                        />
                    ))
                }
            </>
        ) : (
        <section id='no_autor'>
            <h1>Autor no encontrado</h1>
        </section>
    ));
    
};

export default CompAutor;