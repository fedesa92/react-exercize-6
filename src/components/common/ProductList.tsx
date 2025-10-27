import Grid from "@mui/material/Grid";
import type { Product } from "../../store/CartReducer";
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: Array<Product>;
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <Grid container spacing={3}>
            {products.map((p, index) => (
                <Grid item xs={12} sm={6} md={4} key={p.id}>
                    <ProductItem product={p} />
                </Grid>
            ))}
        </Grid>
    )
}