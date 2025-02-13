import "./order.css";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Order() {
    return (
        <Box className="order">
            <Box className="order-content">
                <Typography variant="h4" fontWeight="bold">
                    طلبــــــك أولويتنا:
                </Typography>
                <Typography variant="h5" my={2}>
                    شحن سريع يوصلك وين ما كنت حول العالم
                </Typography>
                <Link to="/all-products">
                    <Button
                        variant="contained"
                        className="main-button"
                        sx={{ float: "left" }}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        اطلب الآن
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
