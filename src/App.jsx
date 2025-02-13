import { Routes, Route } from "react-router-dom";
import Home from "./components/home-page/Home";
import Login from "./components/registration-page/login/Login";
import Signup from "./components/registration-page/signup/Signup";
import AllProducts from "./components/all-products-page/AllProducts";
import ProductDetails from "./components/product-details-page/ProductDetails";
import Cart from "./components/cart-page/Cart";
import { CartProvider } from "./context/cartContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import NotFound from "./components/not-found-page/NotFound";
export default function App() {
    return (
        <CartProvider>
            <SnackbarProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/all-products" element={<AllProducts />} />
                    <Route
                        path="/product-details/:id"
                        element={<ProductDetails />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </SnackbarProvider>
        </CartProvider>
    );
}
