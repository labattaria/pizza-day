import Input from '../Input/Input';
import Button from '../Button/Button';

const LoginForm = ({ className }) => {

    return (
        <form className={className}>
            <Input type="text" placeholder="Your full name" />
            <Button label="Login" />
        </form>
    );
};

export default LoginForm;