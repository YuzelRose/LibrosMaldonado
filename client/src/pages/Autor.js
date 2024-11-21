import React from 'react'
import './css/Autor.css'
import fond from '../img/fond/loginfondo.png';
import { useParams } from 'react-router-dom';
import { CompAutor, AutorBooks } from '../backend'

export default function Autor(){
    const { Name } = useParams();
    const decodedName = decodeURIComponent(Name);

    return(
        <main id='main_autor' style={{ backgroundImage: `url(${fond})` }}>
            <CompAutor Name={decodedName} />
            <section id='autor_book_wall'>
                <AutorBooks Name={decodedName} />
            </section>
        </main>
    )
}