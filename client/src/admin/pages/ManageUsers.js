import React from "react";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import CompAlterUser from '../components/CompAlterUser.js'

export default function ManageUsers() {
    return(
        <>
            <main className="admin_main" id="dashboard">
                <SideNav />
                <section className="tables_section" >
                    <CompAlterUser />
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'/admin/DashBord'} className="link">DashBord</Link> \ <Link to={'/admin/DashBord/users'} className="link">Usuarios</Link></p>
            </footer>
        </>
    );
} 