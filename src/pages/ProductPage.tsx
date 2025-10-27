import Typography from "@mui/material/Typography";
import ProductList from "../components/common/ProductList";
import DUMMY_PRODUCTS from "../fake-products";

export default function ProductPage() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Products</Typography>
            <ProductList products={DUMMY_PRODUCTS} />
        </div>
    )
}