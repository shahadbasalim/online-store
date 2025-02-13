import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductQuantity({ quantity, setQuantity }) {

    const increaseQuantity = () =>
        setQuantity((prev) => prev + 1);

    const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

    return (
        <>
            <Box className="quantity-container flex">
                <Box
                    className="quantity flex"
                    sx={{
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                    }}
                >
                    <IconButton
                        onClick={decreaseQuantity}
                        disabled={quantity === 1}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{quantity}</Typography>
                    <IconButton
                        onClick={increaseQuantity}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}
