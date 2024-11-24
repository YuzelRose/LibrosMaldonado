import React from "react";
import SideNav from "../components/SideNav.js";
import { Link } from "react-router-dom";
import CompDescount from "../components/CompDescount.js";

export default function Descount() {
    return(
        <>
            <main className="admin_main" id="dashboard">
                <SideNav />
                <section className="tables_section">
                    <CompDescount />
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'/admin/DashBord'} className="link">DashBord</Link> \ <Link to={'/admin/DashBord/descount'} className="link">Descuentos</Link></p>
            </footer>
        </>
    );
}