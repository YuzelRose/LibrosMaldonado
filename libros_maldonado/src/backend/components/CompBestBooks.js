import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductObj } from '../../objects';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:5000/LibMal/Libros/BestSellers';

const CompBestBooks = () => {
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

            const booksWithSales = fetchedBooks
                .filter(book => book.Ventas > 0)  
                .sort((a, b) => b.Ventas - a.Ventas); 
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
                <button className='more_btn' onClick={seeMore}>Ver todos</button>
            </article>
        ) : null
        
    );
};

export default CompBestBooks;