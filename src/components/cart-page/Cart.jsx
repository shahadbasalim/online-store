import "./cart.css";
import Header from "../home-page/header/Header";
import Footer from "../home-page/footer/Footer";
import Breadcrumb from "../all-products-page/breadcrumb/Breadcrumb";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Box, Typography } from "@mui/material";
import CartTable from "./cart-table/CartTable";
import OrderSummary from "./order-summary/OrderSummary";
import { SnackbarContext } from "../../context/SnackbarContext";

export default function Cart() {
    const { showSnackbar } = useContext(SnackbarContext);

    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const [discount, setDiscount] = useState(0);
    const shippingFee = 27;

    const totalProductsPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const applyDiscount = (code) => {
        if (code === "DG10") {
            const totalBeforeDiscount = totalProductsPrice + shippingFee;
            setDiscount(totalBeforeDiscount * 0.1);
        } else {
            setDiscount(0);
            showSnackbar("هذا الكود غير صالح!");
        }
    };

    const finalPrice = totalProductsPrice + shippingFee - discount;

    return (
        <Box className="cart">
            <Header />
            <Box
                sx={{
                    padding: 4,
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                className="cart-content flex"
            >
                <Typography variant="h4" className="title">
                    سلة المشتريات
                </Typography>
                <Breadcrumb title="سلة مشترياتك" />

                {cart.length === 0 ? (
                    <Typography>السلة فارغة</Typography>
                ) : (
                    <>
                        <CartTable
                            cart={cart}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                        />
                        <OrderSummary
                            totalProductsPrice={totalProductsPrice}
                            shippingFee={shippingFee}
                            applyDiscount={applyDiscount}
                            finalPrice={finalPrice}
                        />
                    </>
                )}
            </Box>
            <Footer />
        </Box>
    );
}
