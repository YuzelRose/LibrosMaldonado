import axios from 'axios'
import {useState, useEffect} from 'react'
import {ProductObj} from '../objects'

const URI = 'http://localhost:5000/LibrosMaldonado/Wall';

const CompShowBooks = () => {
    const [books, setBook] = useState([])
    useEffect( ()=>{
        getAllBooks()
    },[])

    const getAllBooks = async () => {
        try {
            const res = await axios.get(URI)
            setBook(res.data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getSearch = async (Name) => {
        try {
            const res = await axios.get(`${URI}${Name}`);
            setBook(res.data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return(
        <section className={books.length > 0 ? 'product' : 'no_product'}>
        {books.length > 0 ? (
            books.map((book) => (
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
            ))
        ) : (
            <p>No books available</p>
        )}
    </section>
    )
}
export default  CompShowBooks