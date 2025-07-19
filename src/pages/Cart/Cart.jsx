import Button from "../../components/Button/Button";
import StickyFooter from '../../components/Cart/Cart';
import { useCallback, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteFromCart, increment } from "../../redux/slices/cartSlice";
import styles from '../Cart/cart.module.scss';

const { cart, cart__title, cart__list, cart__product, cart__navigation, cart__empty, menu__link, order__link } = styles;

const Cart = () => {
    const { username } = useContext(LoginContext);
    const dispatch = useDispatch();
    const { cartItems } = useSelector(store => store.cart);

    const handleIncrementQuantity = useCallback((item) => {
        dispatch(increment(item.id));
    }, [dispatch]);

    const handleDecrementQuantity = useCallback((item) => {
        if (item.quantity <= 1) {
            dispatch(deleteFromCart(item.id));
            return;
        }

        dispatch(decrement(item.id));
    }, [dispatch]);

    const handleDeleteFromCart = useCallback((item) => {
        dispatch(deleteFromCart(item.id));
    }, [dispatch]);

    return (
        <div className={cart}>
            <Link to="/menu" className={menu__link}>← Back to menu</Link>

            {cartItems.length ?
                <div>
                    <h2 className={cart__title}>Your cart, {username}</h2>
                    <ul className={cart__list}>
                        {!!cartItems.length && cartItems.map(item => {
                            return (
                                <li className={cart__product} key={item.id}>
                                    <p>{item.quantity}× {item.name}</p>
                                    <div className="counter">
                                        <p>€{item.unitPrice * item.quantity}</p>
                                        <div className="counter__items">
                                            <Button className="counter__button" label="-" onClick={() => handleDecrementQuantity(item)} />
                                            <p>{item.quantity}</p>
                                            <Button className="counter__button" label="+" onClick={() => handleIncrementQuantity(item)} />
                                        </div>

                                        <Button className="button" onClick={() => handleDeleteFromCart(item)} label="Delete" />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <div className={cart__navigation}>
                        <Link to="/order/new" className={order__link}>Order pizzas</Link>
                    </div>
                </div>
                : <p className={cart__empty}>Your cart is still empty. Start adding some pizzas :)</p>}

            {!!cartItems.length && <StickyFooter />}
        </div>

    )
}

export default Cart;