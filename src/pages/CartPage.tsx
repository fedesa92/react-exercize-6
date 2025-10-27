import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { Box, Button, Divider, ListItem, ListItemText, Typography } from "@mui/material";
import List from "@mui/icons-material/List";

export default function CartPage() {
    const { product, total, removeProduct, clearCart } = useContext(CartContext);
    if(product.length === 0){
        return (<Typography variant="h5" align="center" sx={{ mt: 5}}>
            Cart is empty
        </Typography>)
    }
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Cart</Typography>
            <List>
                {product.map((item,index) => (
                    <div key={`${item.id}-${index}`}>
                        <ListItem secondaryAction={<Button color="error" onClick={() => removeProduct(item)}>Remove</Button>}>
                            <ListItemText 
                                primary={`${item.title} (${item.size}) x${item.quantity}`}
                                secondary={`$${(item.price * item.quantity).toFixed(2)}`}
                            />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
            <Typography variant="h6" sx={{ mt: 2 }}>Total: ${total.toFixed(2)}</Typography>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="error" onClick={clearCart}>Clear cart</Button>
            </Box>
        </Box>
    );
}