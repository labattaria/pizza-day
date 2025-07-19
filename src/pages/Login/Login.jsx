import Heading from '../../components/Heading/Heading';
import SubHeading from '../../components/SubHeading/SubHeading';
import LoginForm from '../../components/LoginForm/LoginForm';
import { title, sub__title, login__form, content } from '../../pages/Login/login.module.scss';

const Login = () => {
    return (
        <main className={content}>
            <Heading className={title} label="The best pizza." />
            <SubHeading className={sub__title} label="👋 Welcome! Please start by telling us your name:" />
            <LoginForm className={login__form} />
        </main>
    );
};

export default Login