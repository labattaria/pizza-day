import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import StickyFooter from '../components/Cart/Cart';
import { useContext, useRef } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { createOrderDetails } from '../redux/slices/cartSlice';

const phoneRegExp = /^[+\d]?(?:[\d-.\s()]*)$/;
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const orderFormSchema = Yup.object().shape({
    username: Yup.string(),
    phone: Yup.string().required("Phone number field is required").matches(phoneRegExp, "Phone number is not valid").min(10, "Too short phone number").max(13, "Too long phone number"),
    address: Yup.string().required("Address field is required").min(8, "Your delivery address must be at least 8 characters long").max(80, "Your delivery address must be less than 80 characters long")
});

const Order = () => {
    const dispatch = useDispatch();
    const { cartItems, totalPrice } = useSelector(store => store.cart);
    const { username } = useContext(LoginContext);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const priorityCheckboxRef = useRef(null);
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            phone: '',
            address: '',
            checkbox: false
        },
        resolver: yupResolver(orderFormSchema)
    });

    const onSubmit = async () => {
        try {
            const postOrder = cartItems.map(({ id, name, unitPrice, quantity }) => {
                return {
                    name,
                    pizzaId: id,
                    quantity,
                    totalPrice: quantity * unitPrice,
                    unitPrice
                }
            });

            const postToAdd = {
                address: addressRef.current.value,
                customer: username,
                phone: phoneRef.current.value,
                priority: priorityCheckboxRef.current.value,
                position: "",
                cart: postOrder
            };

            const options = {
                method: "POST",
                body: JSON.stringify(postToAdd),
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', options);

            if (!response.ok) {
                throw new Error('failed to fetch or post data, the request was rejected.')
            }

            const data = await response.json();

            dispatch(createOrderDetails(data));

            if (data.status === "success") {
                navigate(`/order/${data.data.id}`)
            } else {
                alert("Something went wrong")
            }

        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <h1 className="form-title">Ready to order? Let`s go!</h1>

                <label className="form-field">
                    First Name
                    <Controller control={control} name="username" render={({ field }) => <Input {...field} type="username" className="form-field__input" value={username} />} />
                </label>

                {errors.username && <p className="error-notification">{errors.username.message}</p>}

                <label className="form-field">
                    Phone Number
                    <Controller control={control} name="phone" render={({ field }) => <Input {...field} type="phone" className="form-field__input" ref={phoneRef} />} />
                </label>

                {errors.phone && <p className="error-notification">{errors.phone.message}</p>}

                <label className="form-field">
                    Address
                    <Controller control={control} name="address" render={({ field }) => <Input {...field} type="address" className="form-field__input" ref={addressRef} />} />
                </label>

                {errors.address && <p className="error-notification">{errors.address.message}</p>}

                <label className="form-accepting">
                    <Controller control={control} name="checkbox" render={({ field }) => <Input {...field} type="checkbox" className="form-accepting__checkbox" ref={priorityCheckboxRef} />} />
                    <span className="form-accepting__description">Want to give your order priority?</span>
                </label>

                <Button type="submit" label={`Order now for €${totalPrice}`} className="form-submit" onSubmit={() => { }} disabled={!isValid} />
            </form>

            {!!cartItems.length && <StickyFooter />}
        </div>

    );
};

export default Order;