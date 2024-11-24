import React, { useEffect, useState } from "react";
import './css/comp_descount.css';
import axios from "axios";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop';
const URI = `${URI_START}/LibMal/Libros/`;

export default function CompDescount() {
    const [data, setData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]); // Estado para almacenar objetos seleccionados
    const [discount, setDiscount] = useState(0); // Estado para el valor del descuento

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

    const handleCheckboxChange = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id)); 
        } else {
            setSelectedItems([...selectedItems, id]); 
        }
    };

    const alterDescount = async (e) => {
        e.preventDefault();
        if (selectedItems.length === 0) {
            alert("Selecciona al menos un objeto.");
            return;
        }

        try {
            const updates = selectedItems.map(id => ({
                id,
                descuento: discount
            }));

            await axios.put(`${URI}UpdateMass`, { updates }); 
            alert("Descuentos actualizados correctamente.");
            setSelectedItems([]); 
            getData(); 
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form id="form_set_descount_on_mass" onSubmit={alterDescount}>
            <p id="set_descount_on_mass">
                Descuento: 
                <input 
                    type="number" 
                    value={discount} 
                    onChange={(e) => setDiscount(Number(e.target.value))} 
                    required 
                />
                <button type="submit">Guardar</button>
            </p>
            <h2>Libros:</h2>
            {data.length > 0 ? (
                <>
                    {data.map((mData) => (
                        <p className="descount_book_list" key={mData._id}>
                            <input 
                                type="checkbox" 
                                checked={selectedItems.includes(mData._id)}
                                onChange={() => handleCheckboxChange(mData._id)}
                            />
                            {mData.Nombre}
                        </p>
                    ))}
                </>
            ) : (
                <p>No hay datos disponibles.</p>
            )}
        </form>
    );
}
