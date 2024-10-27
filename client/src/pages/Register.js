import React from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import  {FormCreateUser}  from '../backend'

export default function Register(){
   
    return(
        <main id='main_reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <FormCreateUser />
        </main>
    )
}