import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
    const { product } = useContext(CartContext);
    const totalProducts = product.reduce((sum,i) => sum + i.quantity, 0);
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: "space-between"}}>
                <Typography variant="h6"
                    component={Link} to="/"
                    sx={{ color: "inherit", textDecoration: "none", fontWeight: "bold"}}>
                    Shop
                </Typography>
                <div>
                    <Button color="inherit" component={Link} to="/" sx={{ textTransform:"none", mr: 2}}>
                        Products
                    </Button>
                    <Button color="inherit" component={Link} to="/cart" sx={{ textTransform:"none"}}>
                        Cart 
                        <Badge badgeContent={totalProducts} color="secondary"><ShoppingCartIcon /></Badge>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}