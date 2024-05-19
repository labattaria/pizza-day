import MenuList from '../components/Menu/MenuList';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../context/LoginContext';

const Menu = () => {
    const [pizzas, setPizzas] = useState([]);
    const navigate = useNavigate();
    const { username } = useContext(LoginContext);

    useEffect(() => {

        const fetchAllPizzas = async () => {
            try {
                const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

                if (!response.ok) {
                    throw new Error('failed to fetch data, the request was rejected.')
                }

                const data = await response.json();

                setPizzas(data.data);
            } catch (error) {
                console.log(error.message)
            }
        };

        fetchAllPizzas();

        if (!username) {
            navigate("/");
        }

    }, [navigate, username]);

    return (
        <MenuList pizzas={pizzas} />
    );
};

export default Menu;