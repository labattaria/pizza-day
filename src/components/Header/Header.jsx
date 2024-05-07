import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';

const Form = ({ className, placeholder }) => {

    return (
        <form className={className}>
            <Input placeholder={placeholder} />
        </form>
    );
};

const Header = ({ className }) => {

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

            <Form placeholder="Search for the order #" />
        </header>
    );
};

export default Header;