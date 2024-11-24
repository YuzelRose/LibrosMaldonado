import React from "react";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import CompAlterAutor from '../components/CompAlterAutor.js'

export default function ManageAutors() {
    return(
        <>
            <main className="admin_main" id="dashboard">
                <SideNav />
                <section className="tables_section" >
                    <CompAlterAutor />
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'/admin/DashBord'} className="link">DashBord</Link> \ <Link to={'/admin/DashBord/autors'} className="link">Autores</Link></p>
            </footer>
        </>
    );
} 