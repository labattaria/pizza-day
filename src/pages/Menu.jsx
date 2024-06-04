import MenuList from '../components/Menu/MenuList';
import StickyFooter from '../components/Cart/Cart';
import { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../context/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../redux/slices/cartSlice';

const Menu = () => {
    // const [pizzas, setPizzas] = useState([]);
    const dispatch = useDispatch()
    const { cartItems, pizzas } = useSelector(store => store.cart);
    const navigate = useNavigate();
    const { username } = useContext(LoginContext);

    useEffect(() => {
        dispatch(getAllPizzas());

        // const fetchAllPizzas = async () => {
        //     try {
        //         const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

        //         if (!response.ok) {
        //             throw new Error('failed to fetch data, the request was rejected.')
        //         }

        //         const data = await response.json();

        //         setPizzas(data.data);
        //     } catch (error) {
        //         console.log(error.message)
        //     }
        // };

        // fetchAllPizzas();

        if (!username) {
            navigate("/");
        }

    }, [dispatch, navigate, username]);

    return (
        <div className="menu">
            <MenuList pizzas={pizzas} />

            {!!cartItems.length && <StickyFooter />}
        </div>
    );
};

export default Menu;