import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const phoneRegExp = /^[+\d]?(?:[\d-.\s()]*)$/;
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const orderFormSchema = Yup.object().shape({
    username: Yup.string().required("First Name field is required").min(3, "First Name must be at least 3 characters long").max(20, "First Name must be less than 20 characters long"),
    phone: Yup.string().required("Phone number field is required").matches(phoneRegExp, "Phone number is not valid").min(10, "Too short phone number").max(13, "Too long phone number"),
    address: Yup.string().required("Address field is required").min(8, "Your delivery address must be at least 8 characters long").max(80, "Your delivery address must be less than 80 characters long")
});

const Order = () => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            phone: '',
            address: ''
        },
        resolver: yupResolver(orderFormSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(errors)

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>

            <h1 className="form-title">Ready to order? Let`s go!</h1>

            <label className="form-field">
                First Name
                <Controller control={control} name="username" render={({ field }) => <Input {...field} type="username" className="form-field__input" />} />
            </label>

            {errors.username && <p className="error-notification">{errors.username.message}</p>}

            <label className="form-field">
                Phone Number
                <Controller control={control} name="phone" render={({ field }) => <Input {...field} type="phone" className="form-field__input" />} />
            </label>

            {errors.phone && <p className="error-notification">{errors.phone.message}</p>}

            <label className="form-field">
                Address
                <Controller control={control} name="address" render={({ field }) => <Input {...field} type="address" className="form-field__input" />} />
            </label>

            {errors.address && <p className="error-notification">{errors.address.message}</p>}

            <label className="form-accepting">
                <Input type="checkbox" name="priority" className="form-accepting__checkbox" />
                <span className="form-accepting__description">Want to give your order priority?</span>
            </label>

            <Button type="submit" label="Order now for" className="form-submit" disabled={!isValid} />
        </form>
    );
};

export default Order;