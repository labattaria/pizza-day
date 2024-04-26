import { pizzas } from './menu/data';
import MenuItem from './MenuItem'

const MenuList = ({ onClick }) => {

    return (
        <ul>
            {pizzas.map((pizza, index) => <MenuItem pizza={pizza} onClick={onClick} key={index} />)}
        </ul>
    );
};

export default MenuList;