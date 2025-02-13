import "./allProducts.css";
import Header from "../home-page/header/Header";
import Footer from "../home-page/footer/Footer";
import ProductsContainer from "./products-container/ProductsContainer";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import productsList from "./products-container/productsList";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import PaginationControl from "./pagination/PaginationControl";
import FilterProducts from "./filter-products/FilterProducts";
import { useSearchParams } from "react-router-dom";
export default function AllProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = parseInt(searchParams.get("page")) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const productsPerPage = 8;

    useEffect(() => {
        setSearchParams({ page: currentPage }); 
    }, [currentPage, setSearchParams]);


    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 1000]);


    const filterProducts = (products) => {
        return products.filter((product) => {
            const isSizeMatch = selectedSize
                ? product.sizes.includes(selectedSize)
                : true;
            const isColorMatch = selectedColor
                ? product.colors.includes(selectedColor)
                : true;
            const isPriceMatch =
                product.price >= priceRange[0] &&
                product.price <= priceRange[1];
            return isSizeMatch && isColorMatch && isPriceMatch;
        });
    };

    // Calculate the products to display based on the current page
    const filteredProducts = filterProducts(productsList);

    const indexOfLastProduct = currentPage * productsPerPage; // 1 * 8 = 8

    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; //8 - 8 = 0

    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    return (
        <>
            <Header />
            <Box sx={{ padding: 4 }} className="all-products">
                <Typography variant="h4" className="title">
                    المنتجات
                </Typography>

                <Breadcrumb title=" المنتجات" />

                <Box className="all-products-content">
                    <FilterProducts
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />

                    <ProductsContainer products={currentProducts} />
                </Box>

                <PaginationControl
                    currentPage={currentPage}
                    totalPages={Math.ceil(
                        productsList.length / productsPerPage 
                    )} // 14 / 8 = 2 pages
                    onPageChange={(event, value) => setCurrentPage(value)}
                />
            </Box>
            <Footer />
        </>
    );
}
