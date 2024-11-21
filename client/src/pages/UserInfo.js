import React from 'react'
import fond from '../img/fond/loginfondo.png';
import { FormAlterUser, CompUserdata } from '../backend';
import { useAuth } from '../backend/utils/AuthContext';
import './css/user_info.css'
import { Link } from 'react-router-dom';

export default function UserInfo() {
    const {isLogged, authUser} = useAuth()

    return(
        <main id='main_user_info' style={{ backgroundImage: `url(${fond})` }}>
            { isLogged ?
                (
                    <section id="user_info_display">
                        <section id="user_info"> 
                            <CompUserdata mail={authUser} />
                        </section>
                        <nav id="user_info_nav"> 
                            <ul className='user_conteiner user_info_list'>
                                <li><a href="#section_order">Pedidos</a></li>
                                <li className='line'/>
                                <li><a href="#opc_edit_user">Modificar datos:</a></li>
                                <li className='line'/>
                                <ul id='edit_list_opc'>
                                    <li><a href="#form_edit_user">Cambiar información</a></li>
                                    <li><a href="#change_user_pass">Cambiar contraseña</a></li>
                                    <li><a href="#button_last_opc">Eliminar cuenta</a></li>
                                </ul>
                            </ul>
                        </nav>
                        <section id="user_info_opc"> 
                            <h1>compras</h1>
                            <FormAlterUser mail={authUser} />
                        </section>
                    </section>
                ) : (
                    <div id='div_no_log' className='user_conteiner'>
                        <h1>Inicie sessión aqui: <Link title='Inicio de sesión' className='dark_link' to={'/Login'}>Iniciar seción</Link> para poder acceder a esta pagina</h1>
                    </div>
                )

            }
        </main>
    )
}