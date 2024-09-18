import React, { useState } from 'react';
import './css/log_reg.css';
import fond from '../img/fond/loginfondo.png';
import  CompCreateUser  from '../backend/CreateUser.js'

function Register({ setUSer }){
   
    return(
        <main id='main__reg_log' style={{ backgroundImage: `url(${fond})` }}>
            <CompCreateUser setUSer={setUSer} />
        </main>
    )
}
export default Register