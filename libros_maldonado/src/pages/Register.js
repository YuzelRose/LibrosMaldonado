import React from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import  {FormCreateUser}  from '../backend'
import { useNavigate } from 'react-router-dom'


function Register(){
    const navigate = useNavigate();

    const changeForm = () => {
        navigate('/Login')
    }
   
    return(
        <main id='main__reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <FormCreateUser />

            <nav>
                <button onClick={changeForm} className='hcange_form_btn'>Iniciar sesión</button>
            </nav>
        </main>
    )
}
export default Register