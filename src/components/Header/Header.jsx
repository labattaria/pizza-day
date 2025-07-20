import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { header__username, username__input, input__header, logo, navigation, navigation__item, navigation__link } from '../Header/header.module.scss';

const Header = ({ className }) => {
    const { username } = useContext(LoginContext);

    return (
        <header className={className}>
            <a className={logo} href="/pizza-day">Pizza Day</a>

            <nav>
                <ul className={navigation}>
                    <li className={navigation__item}>
                        <NavLink to='/pizza-day' className={navigation__link}>Login</NavLink>
                    </li>
                    <li className={navigation__item}>
                        <NavLink to='/menu' className={navigation__link}>Menu</NavLink>
                    </li>
                </ul>
            </nav>

            <form>
                {username ? <div className={header__username}>{username}</div> : <Input placeholder="Search for the order #" className={`${username__input} ${input__header}`} />}
            </form>
        </header>
    );
};

export default Header;