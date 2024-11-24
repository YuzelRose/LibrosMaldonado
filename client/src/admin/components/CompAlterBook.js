import React, { useEffect, useState } from "react";
import './css/comp_alter_data.css';
import axios from "axios";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI = `${URI_START}/LibMal/Libros/`;

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
            alert(`Libro eliminado.`);
            getData();
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleUpdate = async (updateData) => {
        try {
            await axios.put(`${URI}Update/${updateData.id}`, updateData);
            alert(`Libro actualizado.`);
            getData();
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return(
        data.length > 0 ? (
            <>
                {data.map((mData) => (
                    <form className="closter_data_alter"  key={mData._id} onSubmit={(e) => {
                            e.preventDefault(); 
                            const formData = new FormData(e.target); 
                            handleUpdate({
                                id: mData._id,
                                nombre: formData.get("nombre"),
                                costo: formData.get("costo"),
                                descuento: formData.get("descuento"),
                                existencias: formData.get("existencias"),
                                ventas: formData.get("ventas"),
                                image: formData.get("image"),
                                sinopsis: formData.get("sinopsis"),
                                autores: formData.get("autores")
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
                                />
                            </p>
                            <p>
                                Precio: 
                                <input
                                    type="number"
                                    name="costo"
                                    defaultValue={mData.Costo}
                                    required 
                                />
                            </p>
                            <p>
                                Descuento: (En porcentaje)
                                <input
                                    type="number"
                                    name="descuento"
                                    defaultValue={mData.Descuento}
                                    required 
                                />
                            </p>
                            <p>
                                Existencias: 
                                <input
                                    type="number"
                                    name="existencias"
                                    defaultValue={mData.Existencias}
                                    required 
                                />
                            </p>
                            <p>
                                Ventas: 
                                <input
                                    type="number"
                                    name="ventas"
                                    defaultValue={mData.Ventas}
                                />
                            </p>
                            <p>Imagen: (En base 64)</p>
                            <input
                                    type="text"
                                    name="image"
                                    defaultValue={mData.URLImagen}
                                />
                            <p>Sinopsis:</p>
                            <textarea 
                                rows="7" 
                                cols="50"
                                name="sinopsis"
                                defaultValue={mData.Sinopsis}
                            />
                            <p>Autores: (Separelos por comas ',')</p>
                            <textarea 
                                rows="7" 
                                cols="50"
                                name="autores"
                                defaultValue={mData.Autores}
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