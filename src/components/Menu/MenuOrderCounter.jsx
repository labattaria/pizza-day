import './menu/menu.css'
import { useState } from 'react';
import Button from '../Button/Button';

const MenuOrderCounter = ({ className }) => {
    const [count, setCount] = useState(0);

    const handleIncrementClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrementClick = () => {
        if (count === 0) {
            alert("You cannot order 0 or less pizzas 😄");
            return;
        }

        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="counter">
            <Button className={className} label="-" onClick={handleDecrementClick} />
            <p>{count}</p>
            <Button className={className} label="+" onClick={handleIncrementClick} />
        </div>
    );
};

export default MenuOrderCounter;