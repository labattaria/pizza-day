import { memo } from 'react';

const Button = ({ className, label, onClick, disabled }) => {

    return (
        <button className={className} onClick={onClick} disabled={disabled}>{label}</button>
    );
};

export default memo(Button);