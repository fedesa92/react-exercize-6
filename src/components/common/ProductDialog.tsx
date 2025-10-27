import { useContext, useState } from "react";
import type { Product } from "../../store/CartReducer";
import { CartContext } from "../../context/CartContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface ProductDialogProps {
    open: boolean;
    onClose: () => void;
    product: Product;
}
export default function ProductDialog({ open, onClose, product }: ProductDialogProps) {
    const { addProduct } = useContext(CartContext);
    const [quantity, setQuantity] = useState<number>(1);
    const [size, setSize] = useState<string>("SM");
    const handleAddProduct = () => {
        addProduct({...product,size,quantity});
        onClose();
    }
    return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Price: ${product.price}
        </Typography>

        <TextField
          select
          label="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          fullWidth
          margin="normal">
          <MenuItem value="SM">Small</MenuItem>
          <MenuItem value="MD">Medium</MenuItem>
          <MenuItem value="LG">Large</MenuItem>
        </TextField>
        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          fullWidth
          margin="normal"
          inputProps={{ min: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}