import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

const Header = ({ className }) => {
    const { username } = useContext(LoginContext);

    return (
        <header className={className}>
            <a className="logo" href="/">Pizza Day</a>

            <nav>
                <ul className="header__nav">
                    <li className="item">
                        <NavLink to='/' className="link">Login</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to='/menu' className="link">Menu</NavLink>
                    </li>
                </ul>
            </nav>

            <form>
                <Input placeholder={username ? username : "Search for the order #"} />
            </form>
        </header>
    );
};

export default Header;