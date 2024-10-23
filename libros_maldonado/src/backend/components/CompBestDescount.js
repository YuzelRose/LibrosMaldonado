import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibMal/Libros/Descount';

const CompShowDesBooks = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [hasDiscounts, setHasDiscounts] = useState(false);

    const seeMore = () => {
        navigate('/ProductWall');
    };

    useEffect(() => {
        getDescountBooks();
    }, []);

    const getDescountBooks = async () => {
        try {
            const res = await axios.get(URI);
            const fetchedBooks = res.data;
            const booksWithDiscounts = fetchedBooks.filter(book => book.Descuento > 0);
            const hasDiscounts = booksWithDiscounts.length > 0;
            setHasDiscounts(hasDiscounts);
            setBooks(booksWithDiscounts);
            setHasDiscounts(hasDiscounts);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        hasDiscounts ? (
            <article className='descount_selection'>
                <div className='section_name'>
                    <h2>Descuentos</h2>
                </div>
                <section className='sale_wall'>
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
            </article>
        ) : null
    );
};

export default CompShowDesBooks;
