const Input = ({ className, type, placeholder, value, onChange, onBlur }) => {

    return (
        <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
    );
};

export default Input;