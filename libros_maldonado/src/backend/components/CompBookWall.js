import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../../objects';

const URI = 'http://localhost:5000/LibMal/Libros/';

const CompBookWall = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = async () => {
        try {
            const res = await axios.get(URI)
            setBooks(res.data)
        } catch (error) {
            console.error('Error:', error);
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