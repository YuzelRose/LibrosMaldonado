import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../../objects';

const URI_START = process.env.REACT_APP_BACK_URL || 'http://localhost:5000'
const URI = `${URI_START}/LibMal/Libros/Autor/Books`;

const AutorBooks = ({Name}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBookAutors();
    }, []);

    const getBookAutors = async () => {
        try {
            const res = await axios.get(`${URI}/${Name}`);
            if (res.data) {
                setBooks(res.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        books.length > 0 ? (
            <section className='sale_wall_wrapper'>
            {
                books.map((book) => (
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
                ))
            }
            </section>
        ) : (
            <section id='no_books'>
                <h1>Sin libros</h1>
            </section>
        )
    );
    
};

export default AutorBooks;