import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { SnackbarContext } from "../../../context/SnackbarContext";
import { Button } from "@mui/material";

export default function AddToCartButton({
    product,
    selectedSize,
    selectedColor,
    quantity,
}) {
    const { addToCart } = useContext(CartContext);
    const { showSnackbar } = useContext(SnackbarContext);


    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor, quantity);
        showSnackbar("تم إضافة المنتج إلى السلة!");
    };

    return (
        <>
            <Button
                variant="outlined"
                sx={{ width: "100%", mr: 2 }}
                onClick={handleAddToCart}
            >
                أضف إلى السلة
            </Button>
        </>
    );
}
