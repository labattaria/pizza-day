import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    pizzas: [],
    error: "",
    totalItems: 0,
    totalPrice: 0,
    orderDetails: {}
}

export const getAllPizzas = createAsyncThunk(
    'cart/getAllPizzas',
    async () => {
        try {
            const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

            if (!response.ok) {
                throw new Error('failed to fetch data, the request was rejected.')
            }

            const { data } = await response.json();

            return data;
        } catch (error) {
            console.log(error.message)
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.cartItems.find(item => item.id === action.payload.id);

            if (!findItem) {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            } else {
                findItem.quantity += 1;
            }

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        increment: (state, action) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            findItem.quantity += 1;

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        decrement: (state, action) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            findItem.quantity -= 1;

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        createOrderDetails: (state, action) => {
            state.orderDetails = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload;
        });
        builder.addCase(getAllPizzas.rejected, (state, action) => {
            state.error = "failed to fetch data, the request was rejected.";
        });
    }
})

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, increment, decrement, createOrderDetails } = cartSlice.actions;

const calcTotalItems = (items) => items.reduce((acc, item) => acc + item.quantity, 0);
const calcTotalPrice = (items) => items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);