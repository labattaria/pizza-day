const LinkItem = ({ className, href, label }) => {

    return (
        <a className={className} href={href}>{label}</a>
    )
};

const Form = ({ className, placeholder }) => {

    return (
        <form className={className}>
            <input placeholder={placeholder} />
        </form>
    );
};

const Header = ({ className }) => {

    return (
        <header className={className}>
            <LinkItem className="logo" href="/" label="Pizza Day" />
            <Form placeholder="Search for the order #" />
        </header>
    );
};

export default Header;