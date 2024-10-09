import { useNavigate } from 'react-router-dom'
import React from 'react'
import './css/log_options.css'
import cart from '../../img/svg/cart.svg'
import favlist from '../../img/svg/favlist.svg'
import { useAuth } from '../../backend/utils/AuthContext'

export default function LogOptions() {
    const {setAuthUser,setIsLogged, authUser} = useAuth()
    const navigate = useNavigate();
    const redirectFavList = () => {
        navigate('/FavList');
    }
    const redirectShopCart = () => {
        navigate('/ShopCart');
    }
    const redirectUserInfo = () => {
        navigate('/UserInfo');
    }
    const handleLogOut = (e) => {
        e.preventDefault()
        setIsLogged(false)
        setAuthUser(null)
        eliminateXML()
        alert('Sesión cerrada.')
        navigate('/')
    }
    const eliminateXML = () => {
        localStorage.removeItem('userSession');
    }
    return(
        <section class="section__log_options">
            <div id='favlist' className='svg_center'>
                <img src={favlist} alt='Favoritos' title="Lista de favoritos" onClick={redirectFavList} />
            </div>
            <div id='cart' className='svg_center'>
                <img src={cart} alt='Carrito' title="Carro de compras" onClick={redirectShopCart} />
            </div>
            <section className='drop_list'>
                <button className='options_btn logout_btn'>Opciones</button>
                <ul className='drop_down_opc'> 
                    <li id='li_user'>{authUser}</li>
                    <li onClick={redirectUserInfo}>Perfil</li>
                    <li id='li_cart' onClick={redirectShopCart}>Carro de compras</li>
                    <li id='li_favlist' onClick={redirectFavList}>Lista de favoritos</li>
                    <li onClick={(e)=>{handleLogOut(e)}}>Cerrar sesión</li>
                </ul>
            </section>
        </section>
    )
}