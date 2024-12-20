import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import CompAlterAutor from '../components/CompAlterBook.js'

export default function ManageBooks() {
    return(
        <>
            <main className="admin_main" id="dashboard">
                <SideNav />
                <section className="tables_section" >
                    <CompAlterAutor />
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'/admin/DashBord'} className="link">DashBord</Link> \ <Link to={'/admin/DashBord/books'} className="link">Libros</Link></p>
            </footer>
        </>
    );
} 