import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p.slug === action.payload.slug
            );
            if (item) {
                item.quantity++;
                item.price = item.oneQuantityPrice * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload,
                     quantity: action.payload.quantity ? action.payload.quantity : 1, 
                     price: action.payload.oneQuantityPrice* action.payload.quantity });
            }
        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((p) => {
                if (p.slug === action.payload.slug) {
                    if (action.payload.key === "quantity") {
                        p.price =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        incrementCat: (state, action) => {

        },
        decrementCart: (state, action) => {

        },
        
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (p) => p.slug !== action.payload.slug
            );
        },

        emptyCart: (state, ) => {
            state.cartItems = [];
      
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart,emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
