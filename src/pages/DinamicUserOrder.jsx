import { useSelector } from "react-redux";

const DinamicUserOrder = () => {
    const { data } = useSelector(store => store.cart.orderDetails);

    return (
        <div className="order">
            <div className="order__status">
                <h2 className="order__title">Order #{data.id} status: {data.status}</h2>
                <div>
                    {data.priority && <span className="order__tracking order__tracking--priority">priority</span>}
                    <span className="order__tracking order__tracking--status">preparing order</span>
                </div>
            </div>

            <div className="order__delivery">
                <p className="delivery__title">Only 50 minutes left 😃</p>
                <p className="delivery__time">(Estimated delivery: {new Date(data.estimatedDelivery).toLocaleString()})</p>
            </div>

            <ul className="order__list">
                {!!data.cart.length && data.cart.map(product => {
                    return (
                        <li className="order__product" key={product.pizzaId}>
                            <p className="product__description">{product.quantity}× {product.name}</p>
                            <p className="product__price">€{product.unitPrice * product.quantity}</p>
                        </li>
                    )
                })}
            </ul>

            <div className="order__price">
                <p className="price__pizza">Price pizza: €{data.orderPrice}</p>
                {data.priority && <p className="price__priority price__pizza--delivery">Price priority: €{data.priorityPrice}</p>}
                <p className="price__pizza price__pizza--delivery">To pay on delivery: €{data.priority ? data.priorityPrice + data.orderPrice : data.orderPrice}</p>
            </div>
        </div>
    )
}

export default DinamicUserOrder;