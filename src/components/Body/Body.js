import './Body.css';

import React, { useState } from 'react';
// import { useRef } from 'react';

function Body() {
    const [min, setMin] = useState();
    const [max, setMax] = useState();

    function onMin(event) {
        setMin(event.target.value);
    }

    function onMax(event) {
        setMax(event.target.value);
    }


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
                <button className='body__btn'>press</button>
                <div className='body__group'>
                    <p className='body__text-res'>result</p>
                    <p className='body__result'></p>
                </div>
            </section>
        </>
    )
}

export default Body;