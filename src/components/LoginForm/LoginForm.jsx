import Input from '../Input/Input';
import Button from '../Button/Button';

const LoginForm = ({ className }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={className} onSubmit={handleFormSubmit}>
            <Input type="text" placeholder="Your full name" />
            <Button type="submit" label="Login" />
        </form>
    );
};

export default LoginForm;