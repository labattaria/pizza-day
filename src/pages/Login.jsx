import Heading from '../components/Heading/Heading';
import SubHeading from '../components/SubHeading/SubHeading';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
    return (
        <main className="content">
            <Heading className="title" label="The best pizza." />
            <SubHeading className="sub-title" label="👋 Welcome! Please start by telling us your name:" />
            <LoginForm className="login-form" />
        </main>
    );
};

export default Login