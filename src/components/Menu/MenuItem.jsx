import './menu/menu.css'
import Button from '../Button/Button';
// import MenuOrderCounter from '../Menu/MenuOrderCounter'
import { useState } from 'react';

const MenuItem = ({ pizza }) => {
    const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

    const [isToggled, setIsToggled] = useState(false);
    const [count, setCount] = useState(0);

    const handleButtonDescrChange = () => {
        setIsToggled(!isToggled);
    };

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
        <li className="pizza" key={id}>
            <img src={imageUrl} className="pizza__image" />
            <div className="pizza__info">
                <p className="pizza__name">{name}</p>
                <p className="pizza__ingredients">{ingredients.join(', ')}</p>
                <div className="pizza__actions">
                    {!soldOut ? <p className="pizza__price">€{unitPrice}</p> : <p className="pizza__price">Sold out</p>}
                    {isToggled &&
                        <div className="counter">
                            <Button className="className" label="-" onClick={handleDecrementClick} />
                            <p>{count}</p>
                            <Button className="className" label="+" onClick={handleIncrementClick} />
                        </div>}
                    {!soldOut && <Button className="button" onClick={handleButtonDescrChange} label={isToggled ? "Delete" : "Add to cart"} />}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;