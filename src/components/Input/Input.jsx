import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const { className, type, placeholder, value, onChange, onBlur } = props;

    return (
        <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} ref={ref} />
    );
});

export default Input;