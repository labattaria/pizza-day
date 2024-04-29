import './menu/menu.css'
import { useState } from 'react';
import Button from '../Button/Button';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        if (count === 0) {
            alert("You cannot order 0 or less pizzas 😄");
            return;
        }

        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="counter">
            <Button className="button" label="-" onClick={decrement} />
            <p>{count}</p>
            <Button className="button" label="+" onClick={increment} />
        </div>
    );
};

export default Counter;