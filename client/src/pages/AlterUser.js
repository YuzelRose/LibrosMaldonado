import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; 
import fond from '../img/fond/loginfondo.png';
import { FormConfirmAlter } from '../backend';
import './css/alter_user.css'

export default function AlterUser() {
    const { url } = useParams(); 
    const [operation, setOperation] = useState('');
    const [userKey, setUserKey] = useState('');

    useEffect(() => {
        const [op, k] = url.split(':'); 
        setOperation(op); 
        setUserKey(k); 
    }, [url]);

    return(
        <main id='main_alter_user' style={{ backgroundImage: `url(${fond})` }}>
            <FormConfirmAlter operation={operation} userKey={userKey} />
        </main>
    )
}