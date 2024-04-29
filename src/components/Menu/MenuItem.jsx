// import Button from '../Button/Button';
import MenuButton from '../Button/MenuButton';

const MenuItem = ({ pizza }) => {
    const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

    return (
        <li className="pizza" key={id}>
            <img src={imageUrl} className="pizza__image" />
            <div className="pizza__info">
                <p className="pizza__name">{name}</p>
                <p className="pizza__ingredients">{ingredients.join(', ')}</p>
                <div className="pizza__actions">
                    {!soldOut ? <p className="pizza__price">€{unitPrice}</p> : <p className="pizza__price">Sold out</p>}
                    {!soldOut && <MenuButton className="button" />}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;