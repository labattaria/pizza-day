// import { pizzas } from './menu/data';
import MenuItem from './MenuItem'

const MenuList = ({ pizzas }) => {

    return (
        <ul>
            {pizzas.map((pizza, index) => <MenuItem pizza={pizza} key={index} />)}
        </ul>
    );
};

export default MenuList;