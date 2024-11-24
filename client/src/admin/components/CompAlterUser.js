import React, { useEffect, useState } from "react";
import './css/comp_alter_data.css';
import axios from "axios";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI = `${URI_START}/LibMal/Usuarios/`;

export default function CompAlterUser() {
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
            alert(`Usuario eliminado.`);
            getData();
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleUpdate = async (updateData) => {
        try {
            await axios.put(`${URI}Update/${updateData.id}`, updateData);
            alert(`Usuario actualizado.`);
            getData();
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        data.length > 0 ? (
            <>
                {data.map((mData) => (
                    <form className="closter_data_alter"  key={mData._id} onSubmit={(e) => {
                            e.preventDefault(); 
                            const formData = new FormData(e.target); 
                            handleUpdate({
                                id: mData._id,
                                correo: formData.get("correo"),
                                nombre: formData.get("nombre"),
                                telefono: formData.get("telefono"),
                                direccion: formData.get("direccion"),
                            });
                        }}
                    >
                        <h1>{mData.Correo}</h1>
                        <p>Campos:</p>
                        <div>
                            <p>
                                Nombre: 
                                <input
                                    type="text"
                                    name="nombre"
                                    defaultValue={mData.Nombre}
                                />
                            </p>
                            <p>
                                Correo: 
                                <input
                                    type="email"
                                    name="correo"
                                    defaultValue={mData.Correo}
                                    required 
                                />
                            </p>
                            <p>
                                Telefono: 
                                <input
                                    type="text"
                                    name="telefono"
                                    defaultValue={mData.Telefono}
                                />
                            </p>
                            <p>
                                Direccion: 
                                <input
                                    type="text"
                                    name="direccion"
                                    defaultValue={mData.Direccion}
                                />
                            </p>
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