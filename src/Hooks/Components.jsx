import React from 'react';
import useCounter from './CounterHook';

const CounterComponent = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <h1>Hisoblagich: {count}</h1>
            <button onClick={increment}>Oshirish</button>
            <button onClick={decrement}>Kamaytirish</button>
            <button onClick={reset}>Qayta tiklash</button>
        </div>
    );
};

export default CounterComponent;
