import Button from '../../Button/Button';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decrement, deleteFromCart, increment } from '../../../redux/slices/cartSlice';
import styles from '../MenuItem/menuItem.module.scss';

const { pizza: pizzaItem, pizza__image, pizza__info, pizza__name, pizza__ingredients, pizza__actions, pizza__price, counter, counter__items, counter__button, button } = styles;

const MenuItem = ({ pizza }) => {
    const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

    const [isToggled, setIsToggled] = useState(false);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() => {
        setIsToggled(!isToggled);
        dispatch(addToCart(pizza));

    }, [dispatch, isToggled, pizza]);

    const handleDeleteFromCart = useCallback(() => {
        setIsToggled(!isToggled);
        dispatch(deleteFromCart(pizza.id));
    }, [dispatch, isToggled, pizza.id]);

    const handleIncrementQuantity = useCallback(() => {
        setCount(prevCount => prevCount + 1);
        dispatch(increment(pizza.id));
    }, [dispatch, pizza.id]);

    const handleDecrementQuantity = useCallback(() => {
        if (count <= 1) {
            dispatch(deleteFromCart(pizza.id));
            setIsToggled(!isToggled);
            return;
        }

        setCount(prevCount => prevCount - 1);
        dispatch(decrement(pizza.id));
    }, [count, dispatch, isToggled, pizza.id]);

    return (
        <li className={pizzaItem} key={id}>
            <img src={imageUrl} className={pizza__image} />
            <div className={pizza__info}>
                <p className={pizza__name}>{name}</p>
                <p className={pizza__ingredients}>{ingredients.join(', ')}</p>
                <div className={pizza__actions}>
                    {!soldOut ? <p className={pizza__price}>€{unitPrice}</p> : <p className="pizza__price">Sold out</p>}
                    {isToggled &&
                        <div className={counter}>
                            <div className={counter__items}>
                                <Button className={counter__button} label="-" onClick={handleDecrementQuantity} />
                                <p>{count}</p>
                                <Button className={counter__button} label="+" onClick={handleIncrementQuantity} />
                            </div>

                            <Button className={button} onClick={handleDeleteFromCart} label="Delete" />
                        </div>}
                    {!soldOut && !isToggled && <Button className={button} onClick={handleAddToCart} label="Add to cart" />}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;