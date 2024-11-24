import React, { useState } from "react";
import LogOut from '../imeges/Logout.svg'
import Book from '../imeges/Book.svg'
import User from '../imeges/User.svg'
import More from '../imeges/More.svg'
import Writter from '../imeges/Writter.svg'
import to64 from '../imeges/to64.svg'
import descount from '../imeges/Descount.svg'
import { useNavigate } from "react-router-dom";

export default function SideNav() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const showMore = () => {
        setShow(!show);
    };

    return(
        <nav>
            { show ? (
                <ul id="dashboard_navigate_opc">
                    <li onClick={showMore} className="dashboard_navigate_border"><img src={More} title="Opciones" /></li>
                    <li onClick={() => navigate('/admin/DashBord/users')} className="dashboard_navigate_border"><img src={User} title="Usuarios" /></li>
                    <li onClick={() => navigate('/admin/DashBord/books')} className="dashboard_navigate_border"><img src={Book} title="Libros" /></li>
                    <li onClick={() => navigate('/admin/DashBord/autors')}className="dashboard_navigate_border"><img src={Writter} title="Autores" /></li>
                    <li onClick={() => navigate('/admin/DashBord/descount')}className="dashboard_navigate_border"><img src={descount} title="Descuento" /></li>

                    <li onClick={() => navigate('/admin/DashBord/base64')}className="dashboard_navigate_border"><img src={to64} title="Conversor a base 64" /></li>

                    <li onClick={() => navigate('/admin/get-permision')} id="log_out_button"><img src={LogOut} title="Salir" /></li>
                </ul>
                ) : (
                <ul id="big_dashboard_navigate_opc">
                    <li onClick={showMore} className="dashboard_navigate_border"><img src={More} title="Opciones" />Opciones</li>
                    <li onClick={() => navigate('/admin/DashBord/users')} className="dashboard_navigate_border"><img src={User} title="Usuarios" /> Usuarios</li>
                    <li onClick={() => navigate('/admin/DashBord/books')} className="dashboard_navigate_border"><img src={Book} title="Libros" /> Libros</li>
                    <li onClick={() => navigate('/admin/DashBord/autors')}className="dashboard_navigate_border"><img src={Writter} title="Autores" /> Autores</li>
                    <li onClick={() => navigate('/admin/DashBord/descount')}className="dashboard_navigate_border"><img src={descount} title="Descuento" /> Descuento</li>

                    <li onClick={() => navigate('/admin/DashBord/base64')}className="dashboard_navigate_border"><img src={to64} title="Conversor a base 64" /> Base 64</li>


                    <li onClick={() => navigate('/admin/get-permision')} id="log_out_button"><img src={LogOut} title="Salir" /> Salir</li>
                </ul>
                )
            }
            
        </nav>
    );
}