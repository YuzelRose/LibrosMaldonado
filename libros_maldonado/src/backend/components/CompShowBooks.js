import axios from 'axios'
import {useState, useEffect} from 'react'
import {ProductObj} from '../../objects'

const URI_START = process.env.REACT_APP_BACK_URL || 'http://localhost:5000'
const URI = `${URI_START}/LibrosMaldonado/Wall`;

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

    return(
        <section className={books.length > 0 ? 'product' : 'no_product'}>
        {books.length > 0 ? (
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
        ) : (
            <p>No books available</p>
        )}
    </section>
    )
}
export default  CompShowBooks