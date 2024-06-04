import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const StickyFooter = () => {
    const { totalItems, totalPrice } = useSelector(store => store.cart);

    return (
        <div className="sticky__footer">
            <p className="footer__items">
                <span className="footer__item">{totalItems} {totalItems > 1 ? "pizzas" : "pizza"}</span>
                <span className="footer__item footer__item--price">€{totalPrice}</span>
            </p>

            <Link to="/cart" className="footer__item footer__item--link">OPEN CART</Link>
        </div>
    );
};

export default StickyFooter;