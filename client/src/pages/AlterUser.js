import React from 'react'
import fond from '../img/fond/loginfondo.png';
import { FormAlterUser } from '../backend';
import { useAuth } from '../backend/utils/AuthContext';
import './css/user_info.css'
import { Link } from 'react-router-dom';

export default function AlterUser() {
    const {isLogged, authUserName, authUser} = useAuth()

    return(
        <main id='main_user_info' style={{ backgroundImage: `url(${fond})` }}>
            
        </main>
    )
}