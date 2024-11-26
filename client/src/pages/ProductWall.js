import React from 'react';
import { useParams } from 'react-router-dom'; 
import { FormBookFilter } from '../backend'
import fond from '../img/fond/loginfondo.png';
import './css/product_wall.css'

export default function ProductWall() {
    const { data } = useParams();     

    return(
        <main id='product_wall' style={{ backgroundImage: `url(${fond})` }}>
            <FormBookFilter URLname={data}/>
        </main>
    )
}