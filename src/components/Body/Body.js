import './Body.css';

import React, { useState } from 'react';

function Body() {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [num, setNum] = useState('');

    function onMinChange(event) {
        const inputValue = event.target.value;
        if(!inputValue || inputValue.match(/^((-?[1-9][0-9]*)|0|-)$/g)) {
            setMin(inputValue);
        } else {
            setMin(min);
        }
    }

    function onMaxChange(event) {
        const inputValue = event.target.value;
        if(!inputValue || inputValue.match(/^((-?[1-9][0-9]*)|0|-)$/g)) {
            setMax(inputValue);
        } else {
            setMax(max);
        }
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function handleClick() {
        const minNum = Number.parseInt(min)
        const maxNum = Number.parseInt(max)
        if (min !== '' && max !== '' && minNum < maxNum) {
            setNum(getRandomNumber(minNum, maxNum));
        } else {
            setNum('error');
        }
    };

    return (
        <>
            <section className='body'>
                <div className='body__group'>
                    <p className='body__text'>min</p>
                    <input className='body__input' type="text" min='-10000000' value={min} onChange={onMinChange} />
                </div>
                <div className='body__group'>
                    <p className='body__text'>max</p>
                    <input className='body__input' type="number" min='-10000000' value={max} onChange={onMaxChange}/>
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