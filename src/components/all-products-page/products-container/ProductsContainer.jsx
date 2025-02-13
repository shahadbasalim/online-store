import "./productsContainer.css";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductsContainer({ products }) {
    return (
        <Box className="products-container flex">
            {products.map((product) => (
                <Box key={product.id}>
                    <Link
                        to={`/product-details/${product.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Card className="product-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography className="product-name">
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    className="product-description"
                                >
                                    {product.description}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    className="product-colors"
                                >
                                    {product.colors.map((color, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                backgroundColor: color,
                                                borderRadius: "50%",
                                                width: "15px",
                                                height: "15px",
                                                display: "inline-block",
                                                marginRight: "5px",
                                            }}
                                        />
                                    ))}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    className="product-price"
                                >
                                    {product.price} ر.س
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Box>
            ))}
        </Box>
    );
}
