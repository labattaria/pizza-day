import { useState } from 'react';
import Counter from '../Menu/MenuOrderCounter';

const MenuButton = ({ className }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleButtonDescrChange = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            {isToggled && <Counter />}
            <button className={className} onClick={handleButtonDescrChange}>{isToggled ? "Delete" : "Add to cart"}</button>
        </>
    );
};

export default MenuButton;