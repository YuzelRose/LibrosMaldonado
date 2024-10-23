import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import glass from '../../img/svg/glass.svg';
import './css/serch_bar.css';

export default function SerchBar() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const search = () => {
        if (inputValue.trim()) {
            navigate(`/ProductWall/${inputValue}`);
        }
    };

    return (
        <>
            <input 
                id="serch_input" 
                type="search" 
                placeholder="Buscar"
                value={inputValue}
                onChange={handleChange}
            />
            <button id="serch_submit" onClick={search}>
                <img src={glass} title="Buscar"/>
            </button>
        </>
    );
}

