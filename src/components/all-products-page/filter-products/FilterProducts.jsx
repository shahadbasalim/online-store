import "./filterProducts.css";
import { Box, Typography, Slider } from "@mui/material";
import productsList from "../products-container/productsList";

// extract unique value from products list
const getUniqueValues = (key) => [
    ...new Set(productsList.flatMap((product) => product[key])),
];

export default function FilterProducts({
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    priceRange,
    setPriceRange,
}) {
    const sizes = getUniqueValues("sizes");
    const colors = getUniqueValues("colors");

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color === selectedColor ? null : color);
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    return (
        <Box className="filter-products">
            <Typography variant="h5" mb={5}>
                تصفية
            </Typography>

            <Typography variant="body2" mb={2}>
                المقاسات :
            </Typography>
            <Box className="sizes" mb={4}>
                {sizes.map((size) => (
                    <Box
                        key={size}
                        className="size"
                        sx={{
                            border: `2px solid ${
                                selectedSize === size ? "#000" : "#ccc"
                            }`,
                            cursor: "pointer",
                        }}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </Box>
                ))}
            </Box>

            <Typography variant="body2" mb={2}>
                الألوان :
            </Typography>
            <Box mb={4} className="colors">
                {colors.map((color) => (
                    <Box
                        key={color}
                        sx={{
                            backgroundColor: color,
                            border: `2px solid ${
                                selectedColor === color ? "#000" : "transparent"
                            }`,
                            cursor: "pointer",
                        }}
                        className="color"
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </Box>

            <Typography variant="body2" mt={2}>
                السعر : 
            </Typography>
            <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
                step={10}
            />
        </Box>
    );
}
