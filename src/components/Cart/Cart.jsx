import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { sticky__footer, footer__items, footer__item, item__price, item__link } from '../Cart/cart.module.scss';

const StickyFooter = () => {
    const { totalItems, totalPrice } = useSelector(store => store.cart);

    return (
        <div className={sticky__footer}>
            <p className={footer__items}>
                <span className={footer__item}>{totalItems} {totalItems > 1 ? "pizzas" : "pizza"}</span>
                <span className={`${footer__item} ${item__price}`}>€{totalPrice}</span>
            </p>

            <Link to="/cart" className={`${footer__item} ${item__link}`}>OPEN CART</Link>
        </div>
    );
};

export default StickyFooter;