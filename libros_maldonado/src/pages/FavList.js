import React from 'react'
import fond from '../img/fond/loginfondo.png';
import './css/shop_cart.css'
import { CompFavList } from '../backend';

export default function FavList() {
    return(
        <main id='main_fav_list' style={{ backgroundImage: `url(${fond})` }}>
            <CompFavList/>
        </main>
    )
}