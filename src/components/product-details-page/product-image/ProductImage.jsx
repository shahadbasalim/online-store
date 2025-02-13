import { Box } from "@mui/material";

export default function ProductInfo({ image, name }) {
    return (
        <Box className="product-img">
            <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "310px" }}
            />
        </Box>
    );
}
