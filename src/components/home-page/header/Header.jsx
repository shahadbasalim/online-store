import "./header.css";
import { AppBar, Toolbar, Button, Box, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

export default function Header() {
    const { cart } = useContext(CartContext);
    return (
        <AppBar
            position="static"
            className="header"
            sx={{ background: "transparent", padding: "10px 30px" }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Link to="/">
                    <img
                        src="/icons/logo.png"
                        alt="Logo"
                        style={{ width: "120px" }}
                    />
                </Link>

                <Box className="button-wrapper">
                    <Link to="/login">
                        <Button variant="outlined" className="main-button">
                            سجل الآن
                        </Button>
                    </Link>

                    <Link to="/cart">
                        <Button variant="contained" sx={{ mr: 2 }}>
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
