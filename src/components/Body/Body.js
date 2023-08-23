import './Body.css';

import React, { useState } from 'react';

function Body() {
    const [min, setMin] = useState();
    const [max, setMax] = useState();
    const [num, setNum] = useState();

    function onMin(event) {
        setMin(Number.parseInt(event.target.value));
    }

    function onMax(event) {
        setMax(Number.parseInt(event.target.value));
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function handleClick() {
        if (min !== undefined && max !== undefined && min < max) {
            setNum(getRandomNumber(min, max));
        } else {
            setNum('error');
        }
    };

    return (
        <>
            <section className='body'>
                <div className='body__group'>
                    <p className='body__text'>min</p>
                    <input className='body__input' type="number" value={min} onInput={onMin}/>
                </div>
                <div className='body__group'>
                    <p className='body__text'>max</p>
                    <input className='body__input' type="number" value={max} onInput={onMax}/>
                </div>
                <button className='body__btn' onClick={handleClick}>press</button>
                <div className='body__group'>
                    <p className='body__text-res'>result</p>
                    <p className='body__result'>{num}</p>
                </div>
            </section>
        </>
    )
}

export default Body;