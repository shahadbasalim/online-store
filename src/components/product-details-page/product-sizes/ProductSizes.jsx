import { Box, Button, Typography } from "@mui/material";

export default function ProductSizes({ sizes, selectedSize, setSelectedSize }) {
    return (
        <>
            <Typography variant="body2" mt={2}>
                المقاسات المتوفرة:
            </Typography>
            <Box className="sizes-container flex" sx={{ gap: "10px" }}>
                {sizes.map((size) => (
                    <Button
                        key={size}
                        variant={
                            selectedSize === size ? "contained" : "outlined"
                        }
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </Button>
                ))}
            </Box>
        </>
    );
}
