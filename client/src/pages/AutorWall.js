import React from 'react';
import { FormAutorFilter } from '../backend'
import fond from '../img/fond/loginfondo.png';
import './css/product_wall.css'

export default function AutorWall() {

    return(
        <main id='product_wall' style={{ backgroundImage: `url(${fond})` }}>
            <FormAutorFilter/>
        </main>
    )
}