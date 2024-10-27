const URI = 'http://localhost:5000/LibMal/Usuarios/login';

const FormMailHelp = () => {

    return (
        <form id="Mail_help">
            <input type="email" placeholder="example@gmail.com" />
            <button className="btn__mail">Enviar</button>
        </form>
    );
};

export default FormMailHelp;