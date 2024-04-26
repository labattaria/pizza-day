import './menu/menu.css'
import Button from '../Button/Button';

const MenuItem = ({ pizza, onClick }) => {
    const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

    return (
        <li className="pizza" key={id}>
            <img src={imageUrl} className="pizza__image" />
            <div className="pizza__info">
                <p className="pizza__name">{name}</p>
                <p className="pizza__ingredients">{ingredients.join(', ')}</p>
                <div className="pizza__actions">
                    {!soldOut ? <p className="pizza__price">€{unitPrice}</p> : <p className="pizza__price">Sold out</p>}
                    {!soldOut && <Button className="button" label="Add to cart" onClick={onClick} />}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;