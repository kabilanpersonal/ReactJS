import useCounter from './useCounter';
import React from 'react';

export default function CounterComponent(){
    const {value,increment,decrement,reset}= useCounter(6);

    return(
        <>
        <h3>Count: {value}</h3>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}