const LoginInput = ({ type, placeholder }) => {

    return (
        <input type={type} placeholder={placeholder} />
    );
};

const LoginButton = ({ label }) => {
    return (
        <button>{label}</button>
    );
};

const LoginForm = ({ className }) => {

    return (
        <form className={className}>
            <LoginInput type="text" placeholder="Your full name" />
            <LoginButton label="Login" />
        </form>
    )
}

export default LoginForm;