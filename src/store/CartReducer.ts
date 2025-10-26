export interface Product {
    id: number,
    price: number,
    quantity: number,
    title: string,
    description: string,
    size: string
}

export const initialCartState: { product: Array<Product>, total: number } = {
    product: new Array<Product>(),
    total: 0
}

export type CartAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: number } // could be index or id
  | { type: "CLEAR_CART" };

const cartReducer = (state: { product: Array<Product>, total: number }, action: CartAction) => {
    switch (action.type) {
        case "ADD_PRODUCT": {
            const existing = state.product.find(i => i.id === action.payload.id && i.size === action.payload.size);
            let updatedproduct;

            if (existing) {
                updatedproduct = state.product.map(i =>
                i.id === existing.id && i.size === existing.size
                    ? { ...i, quantity: i.quantity + action.payload.quantity }
                    : i
                );
            } else {
                updatedproduct = [...state.product, action.payload];
            }

            const updatedTotal = updatedproduct.reduce(
                (sum, i) => sum + i.price * i.quantity,
                0
            );
            return { product: updatedproduct, total: updatedTotal };
        }
        case "REMOVE_PRODUCT": {
            const filtered = state.product.filter((i: any, index: number) => index !== action.payload);
            const total = filtered.reduce((sum: number, i: Product) => sum + i.price * i.quantity, 0);

            return { product: filtered, total };
        }
        case "CLEAR_CART": 
            return initialCartState;

        default:
            return state;
    }
}

export default cartReducer;