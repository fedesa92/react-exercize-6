import type { Product } from "./store/CartReducer";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Classic T-Shirt",
    price: 19.99,
    quantity: 10, description: "Classic T-Shirt", size: "SM"
  },
  {
    id: 2,
    title: "Blue Jeans",
    price: 49.99,
    quantity: 3, description: "Blue Jeans", size: "44"
  },
  {
    id: 3,
    title: "Sneakers",
    price: 89.99,
    quantity: 13, description: "Sneakers", size: "37"
  },
];

export default DUMMY_PRODUCTS;
