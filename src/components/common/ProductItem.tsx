import { useState } from "react";
import type { Product } from "../../store/CartReducer";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import ProductDialog from "./ProductDialog";

interface ProductItemProps {
  product: Product;
}
export default function ProductItem({ product }: ProductItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography color="secondary">{product.description}</Typography>
          <Typography color="secondary">Price $ {product.price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" fullWidth onClick={() => setOpen(true)}>Add to cart</Button>
        </CardActions>
      </Card>
      <ProductDialog open={open} onClose={() => setOpen(false)} product={product} />
    </>
  )
}