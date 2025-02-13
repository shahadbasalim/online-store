import "./productDetails.css";
import Header from "../home-page/header/Header";
import Footer from "../home-page/footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import productsList from "../all-products-page/products-container/productsList";
import { Box, Typography, IconButton } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ProductImage from "./product-image/ProductImage";
import ProductInfo from "./product-info/ProductInfo";
import ProductSizes from "./product-sizes/ProductSizes";
import ProductColors from "./product-colors/ProductColors";
import ProductQuantity from "./product-quantity/ProductQuantity";
import AddToCartButton from "./add-to-cart-button/AddToCartButton";
import { SnackbarContext } from "../../context/SnackbarContext";

export default function ProductDetails() {
    const { showSnackbar } = useContext(SnackbarContext);

    const { id } = useParams();
    const product = productsList.find((p) => p.id === Number(id));

    const [quantity, setQuantity] = useState(1); // default quantity is one
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]); // default size is the size color
    const [selectedColor, setSelectedColor] = useState(product.colors[0]); // default color is the first color

    // share product
    const shareProduct = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        showSnackbar("تم نسخ رابط المنتج!");
    };

    return (
        <Box className="product-details" >
            <Header />
            <Box className="product-details-content flex">
                <ProductImage image={product.image} name={product.name} />
                <Box>
                    <ProductInfo
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />

                    <ProductSizes
                        sizes={product.sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />

                    <ProductColors
                        colors={product.colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />

                    <Typography variant="body2" mt={2}>
                        الكمية:
                    </Typography>
                    <Box className="flex" mb={2}>
                        <ProductQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <AddToCartButton
                            product={product}
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            quantity={quantity}
                        />
                    </Box>

                    <IconButton onClick={shareProduct}>
                        <ShareOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
