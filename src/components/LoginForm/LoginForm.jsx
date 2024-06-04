import Input from '../Input/Input';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { useState, memo, useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

const LoginForm = ({ className }) => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const { onChange } = useContext(LoginContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        onChange(user);

        navigate("/menu");
    };

    return (
        <form className={className} onSubmit={handleFormSubmit}>
            <Input type="text" placeholder="Your full name" className="username__input" value={user} onChange={e => setUser(e.target.value)} />
            <Button type="submit" label="Login" />
        </form>
    );
};

export default memo(LoginForm);