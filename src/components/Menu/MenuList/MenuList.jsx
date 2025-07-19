import MenuItem from '../MenuItem/MenuItem'
import { menu__list } from '../MenuList/menuList.module.scss';

const MenuList = ({ pizzas }) => {

    return (
        <ul className={menu__list}>
            {pizzas.map((pizza, index) => <MenuItem pizza={pizza} key={index} />)}
        </ul>
    );
};

export default MenuList;