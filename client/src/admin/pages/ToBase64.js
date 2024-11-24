import React, { useState } from "react";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import './css/form_pars.css'

export default function ToBase64() {
    const [parsed, setParsed] = useState(false)
    const [base64Image, setBase64Image] = useState("");

    const copyToClipboard = () => {
        const textArea = document.getElementById("base64Textarea");
        if (textArea) {
            navigator.clipboard
                .writeText(textArea.value)
                .then(() => {
                    alert("Imagen copiada.");
                })
                .catch((error) => {
                    alert("Error al copiar: " + error.message);
                });
        }
    };
    

    const toBase = (e) => {
        e.preventDefault();
        const file = e.target.elements.imageInput.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setBase64Image(reader.result);
                console.log(reader.result); 
            };
            reader.readAsDataURL(file); 
            setParsed(true);
        } else {
            alert("Por favor selecciona un archivo.");
        }
    };

    return(
        <>
            <main className="admin_main" id="dashboard">
                <SideNav />
                <section className="tables_section">
                    <form id="form_pars" onSubmit={toBase}>
                        <h1>Convertir a base 64</h1>
                        <input type="file" name="imageInput" accept="image/*" />
                        { 
                        parsed ? (
                            <>
                                <textarea  
                                    id="base64Textarea"
                                    rows="5"
                                    cols="50"
                                    value={base64Image}
                                    readOnly
                                />
                                <p onClick={copyToClipboard}>Copiar</p>
                            </>
                        ) : null
                        }
                        <button type="submit">Convertir a Base64</button>
                    </form>
                </section>
            </main>
            <footer id="footer_nav">
                <p><Link to={'/admin/DashBord'} className="link">DashBord</Link> \ <Link to={'/admin/DashBord/base64'} className="link">Conversor</Link></p>
            </footer>
        </>
    );
}