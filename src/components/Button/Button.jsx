const Button = ({ className, label, onClick }) => {

    // const onAddToCartClick = () => {
    //     console.log('Successfully added!')
    // }

    return (
        <button className={className} onClick={onClick}>{label}</button>
    );
};

export default Button;