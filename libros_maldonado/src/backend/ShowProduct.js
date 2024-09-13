import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {ProductObj} from '../objects'

const URI = 'http://localhost:5000/LibrosMaldonado/'


const CompShowBooks = () => {
    const [book, setBook] = useState([])
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
        <ProductObj
            
        />
    )
}
export default  CompShowBooks