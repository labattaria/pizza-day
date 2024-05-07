import Input from '../Input/Input';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";

const LoginForm = ({ className }) => {
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        navigate("/menu");
    };

    return (
        <form className={className} onSubmit={handleFormSubmit}>
            <Input type="text" placeholder="Your full name" />
            <Button type="submit" label="Login" />
        </form>
    );
};

export default LoginForm;