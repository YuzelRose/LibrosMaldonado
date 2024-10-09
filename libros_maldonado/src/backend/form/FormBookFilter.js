import axios from "axios";

const URI = 'http://localhost:5000/LibMal/Libros/search' 

const handleSearch = () => {

}

const FormBookFilter = () => {

    return (
        <form className='form_filter' onSubmit={handleSearch}>
            <p>Nombre:</p>
            <input className='text_filter' type='text' placeholder='Nombre'/>
            <p>Autor:</p>
            <input className='text_filter' type='text' placeholder='Autor'/>
            <p><input type='checkbox'/> En descuento</p>
            <p>Costo:</p>
            <input className='text_filter' type='text' placeholder='Minimo'/>
            <p/>
            <input className='text_filter' type='text' placeholder='Maximo'/>
            <input className='logout_btn serch_btn' type='submit' value='Buscar'/>
        </form>
    );
};

export default FormBookFilter;