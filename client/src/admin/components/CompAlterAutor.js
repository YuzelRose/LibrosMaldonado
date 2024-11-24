import React, { useEffect, useState } from "react";
import './css/comp_alter_data.css';
import axios from "axios";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI = `${URI_START}/LibMal/Autores/`;

export default function CompAlterAutor() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get(URI);
            setData(res.data);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (_id) => {
        try {
            await axios.post(`${URI}Drop/${_id}`);
            alert(`Autor eliminado.`);
            getData();
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleUpdate = async (updateData) => {
        try {
            await axios.put(`${URI}Update/${updateData.id}`, updateData);
            alert(`Autor actualizado.`);
            getData();
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        data.length > 0 ? (
            <>
                {data.map((mData) => (
                    <form
                        className="closter_data_alter"
                        key={mData._id}
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                    
                            handleUpdate({
                                id: mData._id,
                                nombre: formData.get("nombre"),
                                resumen: formData.get("resumen"),
                                image: formData.get("image"),
                            });
                        }}
                    >
                        <h1>{mData.Nombre}</h1>
                        <p>Campos:</p>
                        <div>
                            <p>
                                Nombre: 
                                <input
                                    type="text"
                                    name="nombre"
                                    defaultValue={mData.Nombre}
                                    required
                                />
                            </p>
                            <p>
                                Imagen: 
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={mData.URLImage}
                                />
                            </p>
                            <p>Resumen:</p>
                            <textarea 
                                rows="7" 
                                cols="50"
                                name="resumen"
                                defaultValue={mData.Resumen}
                            />
                        </div>
                        <p className="closter_data_opc">
                            <span onClick={() => handleDelete(mData._id)}>Eliminar</span>
                            <button type="submit">Guardar</button>
                        </p>
                    </form>
                ))}
            </>
        ) : null
    );
}