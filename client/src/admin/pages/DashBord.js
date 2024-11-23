import React from "react";
import { Link } from "react-router-dom";
import LogOut from '../imeges/Logout.svg'
import Book from '../imeges/Book.svg'
import User from '../imeges/User.svg'
import More from '../imeges/More.svg'
import Writter from '../imeges/Writter.svg'
import './css/dashboard.css'

export default function DashBord() {
    return(
        <>
            <main className="admin_main" id="dashboard">
                <nav>
                    <ul id="dashboard_navigate_opc">
                        <li className="dashboard_navigate_border"><img src={More} title="Opciones" /></li>
                        <li className="dashboard_navigate_border"><img src={User} title="Usuarios" /></li>
                        <li className="dashboard_navigate_border"><img src={Book} title="Libros" /></li>
                        <li className="dashboard_navigate_border"><img src={Writter} title="Autores" /></li>
                        <li id="log_out_button"><img src={LogOut} title="Salir" /></li>
                    </ul>
                </nav>
                <section id="tables_section">
                    <div className="closter_data">
                        <h1>Usuarios</h1>
                        <p>Campos:</p>
                        <ul>
                            <li>_id</li>
                            <li>Nombre</li>
                            <li>Correo</li>
                            <li>Contraseña</li>
                            <li>Telefono</li>
                            <li>Direccion</li>
                        </ul>
                    </div>
                    <div className="closter_data">
                        <h1>Libros</h1>
                        <p>Campos:</p>
                        <ul>
                            <li>_id</li>
                            <li>Nombre</li>
                            <li>Sinopsis</li>
                            <li>Descuento</li>
                            <li>Costo</li>
                            <li>Existencias</li>
                            <li>Ventas</li>
                            <li>Imagen</li>
                            <li>Autores</li>
                        </ul>
                    </div>
                    <div className="closter_data">
                        <h1>Autores</h1>
                        <p>Campos:</p>
                        <ul>
                            <li>_id</li>
                            <li>Nombre</li>
                            <li>Resumen</li>
                            <li>Imegen</li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'admin/DashBord'} className="link">DashBord</Link></p>
            </footer>
        </>
    );
}