import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibrosMaldonado/Wall';

const CompShowDesBooks = () => {
    const navigate = useNavigate();
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
                    key={book.IDLibro}
                    imageLink={book.imageLink}
                    price={book.Costo}
                    descount={book.Descuento}
                    name={book.Nombre}
                    fullInfo={book.Sinopsis}
                    productId={book.IDLibro}
                    alt={book.Nombre}
                />
            ))}
        </section>
    );
};

export default CompShowDesBooks;
