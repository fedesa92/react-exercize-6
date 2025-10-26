import { createContext, useReducer } from "react";
import cartReducer, { initialCartState, type Product } from "../store/CartReducer";

export const CartContext = createContext({
    product: [],
    total: 0,
    addItem: (product: Product) => {},
    removeProduct: (product: Product) => {},
    clearCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    const addProduct = (pr: Product) => dispatch({ type: 'ADD_PRODUCT', payload: pr});
    const removeProduct = (pr: Product) => dispatch({ type: 'REMOVE_PRODUCT', payload: pr});
    const clearCart = () => dispatch({ type: 'CLEAR_CART'});

    return (
        <CartContext.Provider value={{ ...cartState, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};
