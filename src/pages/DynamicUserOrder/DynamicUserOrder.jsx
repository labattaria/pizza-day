import { useSelector } from "react-redux";
import styles from '../DynamicUserOrder/userOrder.module.scss';

const { order, order__status, order__title, order__list, order__price,
    tracking, tracking__status, tracking__priority,
    delivery, delivery__title, delivery__time,
    product, product__price,
    price__pizza, price__delivery } = styles;

const DinamicUserOrder = () => {
    const { data } = useSelector(store => store.cart.orderDetails);

    return (
        <div className={order}>
            <div className={order__status}>
                <h2 className={order__title}>Order #{data.id} status: {data.status}</h2>
                <div>
                    {data.priority && <span className={`${tracking} ${tracking__priority}`}>priority</span>}
                    <span className={`${tracking} ${tracking__status}`}>preparing order</span>
                </div>
            </div>

            <div className={delivery}>
                <p className={delivery__title}>Only 50 minutes left 😃</p>
                <p className={delivery__time}>(Estimated delivery: {new Date(data.estimatedDelivery).toLocaleString()})</p>
            </div>

            <ul className={order__list}>
                {!!data.cart.length && data.cart.map(pizza => {
                    return (
                        <li className={product} key={pizza.pizzaId}>
                            <p className="product__description">{pizza.quantity}× {pizza.name}</p>
                            <p className={product__price}>€{pizza.unitPrice * pizza.quantity}</p>
                        </li>
                    )
                })}
            </ul>

            <div className={order__price}>
                <p className={price__pizza}>Price pizza: €{data.orderPrice}</p>
                {data.priority && <p className={`${price__pizza} ${price__delivery}`}>Price priority: €{data.priorityPrice}</p>}
                <p className={`${price__pizza} ${price__delivery}`}>To pay on delivery: €{data.priority ? data.priorityPrice + data.orderPrice : data.orderPrice}</p>
            </div>
        </div>
    )
}

export default DinamicUserOrder;