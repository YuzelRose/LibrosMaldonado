import React from 'react'
import {CompShopCart} from '../backend'
import fond from '../img/fond/loginfondo.png';
import './css/shop_cart.css'


export default function ShopCart() {
    return(
        <main id='main_shop_cart' style={{ backgroundImage: `url(${fond})` }}>
            <CompShopCart/>
        </main>
    )
}
