import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/serch_bar.css';
import glass from '../../img/svg/glass.svg';

export default function SerchBar() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const search = () => {
        if (inputValue.trim()) {
            navigate(`/ProductWall:${inputValue}`);
        }
    };

    return (
        <div className='flexsearch__wrapper'>
            <div className='div__flexsearch'>
                <input 
                    className="flexsearch__input" 
                    type="search" 
                    placeholder="Buscar"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className="flexsearch__submit" onClick={search}>
                    <div><img src={glass} alt="Buscar" /></div>
                </button>
            </div>
        </div>
    );
}

