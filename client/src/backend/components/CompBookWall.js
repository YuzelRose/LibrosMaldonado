import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Libros/`;

const CompBookWall = ({ query }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (query) {
            searchBooks(query);
        } else {
            getAllBooks();
        }
    }, [query]); 

    const getAllBooks = async () => {
        try {
            const res = await axios.get(URI);
            setBooks(res.data);
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

    const searchBooks = async (query) => {
        try {
            const res = await axios.get(`${URI}search${query}`);
            setBooks(res.data);
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
        <section className='sale_wall_wrapper'>
            {books.map((book) => (
                <ProductObj
                    key={book._id}
                    productId={book._id}
                    imageLink={book.URLImagen}
                    price={book.Costo}
                    descount={book.Descuento}
                    name={book.Nombre}
                    fullInfo={book.Sinopsis}
                    alt={book.Nombre}
                />
            ))}
        </section>
    );
};

export default CompBookWall;
