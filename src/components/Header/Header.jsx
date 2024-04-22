import Input from '../Input/Input';

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
            <Form placeholder="Search for the order #" />
        </header>
    );
};

export default Header;