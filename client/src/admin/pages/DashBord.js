import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from '../components/SideNav.js'
import './css/dashboard.css'

export default function DashBord() {
    const navigate = useNavigate();

    return(
        <>
            <main className="admin_main" id="dashboard">
                <SideNav />
                <section className="tables_section">
                    <div title="Modificar usuario" className="closter_data" onClick={() => navigate('/admin/DashBord/users')}>
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
                    <div title="Modificar Libros" className="closter_data" onClick={() => navigate('/admin/DashBord/books')}>
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
                    <div title="Modificar Autores" className="closter_data" onClick={() => navigate('/admin/DashBord/autors')}>
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
                <p><Link to={'/admin/DashBord'} className="link">DashBord</Link></p>
            </footer>
        </>
    );
}