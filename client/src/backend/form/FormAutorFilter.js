

const handleSearch = () => {

}

const FormAutorFilter = () => {

    return (
        <form className='form_filter' onSubmit={handleSearch}>
            <p>Nombre:</p>
            <input className='text_filter' type='text' placeholder='Nombre'/>
            <input className='serch_btn' type='submit' value='Buscar'/>
        </form>
    );
};

export default FormAutorFilter;