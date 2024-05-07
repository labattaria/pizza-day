import MenuList from '../components/Menu/MenuList';
import { useState, useEffect } from 'react';

const Menu = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {

        const fetchAllPizzas = async () => {
            try {
                const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

                if (!response.ok) {
                    throw new Error('failed to fetch data, the request was rejected')
                }

                const data = await response.json();

                setPizzas(data.data);
            } catch (error) {
                console.log(error.message)
            }
        };

        fetchAllPizzas();

    }, []);

    return (
        <MenuList pizzas={pizzas} />
    );
};

export default Menu;