import React from 'react'
import { useParams } from 'react-router-dom'; 
import './css/main_new_user.css'
import fond from '../img/fond/loginfondo.png';
import {CompNewUser} from '../backend'

 
export default function NewUser() {
    const { key } = useParams(); 

    return(
        <main id='main_new_user' style={{ backgroundImage: `url(${fond})` }}>
            <CompNewUser userKey={key}/>
        </main>
    )
}
