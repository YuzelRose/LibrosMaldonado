import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibrosMaldonado/Bsel';

const CompShowBestBooks = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [hasSells, setHasSells] = useState(false);

    const seeMore = () => {
        navigate('/ProductWall');
    };

    useEffect(() => {
        getBestSellerBooks();
    }, []);

    const getBestSellerBooks = async () => {
        try {
            const res = await axios.get(URI);
            const fetchedBooks = res.data;

            // Filtrar libros con ventas mayores a 0 y ordenar de mayor a menor ventas
            const booksWithSales = fetchedBooks
                .filter(book => book.Ventas > 0)  // Filtrar los libros con ventas mayores a 0
                .sort((a, b) => b.Ventas - a.Ventas); // Ordenar por ventas de mayor a menor

            const hasSells = booksWithSales.length > 0;
            setHasSells(hasSells);
            setBooks(booksWithSales);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        hasSells ? (
            <article className='descount_selection'>
                <div className='section_name'>
                    <h2>Mas vendido</h2>
                </div>
                <section className='sale_wall'>
                    {books.map((book) => (
                        <ProductObj
                            key={book.IDLibro}
                            imageLink={book.imageLink}
                            price={book.Costo}
                            descount={book.Descuento}
                            name={book.Nombre}
                            fullInfo={book.Sinopsis}
                            Writers=''
                            productId={book.IDLibro}
                            alt={book.Nombre}
                        />
                    ))}
                </section>
                <button className='more_btn' onClick={seeMore}>Ver todos</button>
            </article>
        ) : null
        
    );
};

export default CompShowBestBooks;