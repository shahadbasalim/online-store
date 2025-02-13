import "./products.css";
import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import productsList from "../../all-products-page/products-container/productsList";
import ProductsContainer from "../../all-products-page/products-container/ProductsContainer";
export default function Products() {
    const [category, setCategory] = useState("فساتين");

    const filteredProducts = productsList
        .filter((p) => p.category === category)
        .slice(0, 6); //display only 6 products in each category

    const categories = ["فساتين", "أحذية", "حقائب", "اكسسوارات"];

    return (
        <Box className="products">
            <Box className="products-content flex">
                <Typography variant="h4" className="title">
                    عالم الموضة
                </Typography>
                <Typography variant="body6" mt={2} className="paragraph" sx={{textAlign: "center"}}>
                    الأناقة تبدأ هنا: تسوق أحدث صيحات الموضة بخطوات بسيطة!
                </Typography>

                {/* filterable gallery */}
                <Box sx={{ py: 4 }}>
                    <Box className="categories-btn-container flex">
                        {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    variant={
                                        category === cat
                                            ? "contained"
                                            : "outlined"
                                    }
                                    className="category-btn"
                                >
                                    {cat}
                                </Button>
                            )
                        )}
                    </Box>

                    {/* Display products based on the selected category*/}
                    <ProductsContainer products={filteredProducts} />

                    <Box mt={8} sx={{ textAlign: "center" }}>
                        <Link to={"/all-products"}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                عرض الكل
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
