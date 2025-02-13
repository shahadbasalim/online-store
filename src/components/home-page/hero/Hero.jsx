import "./hero.css";
import { Box, Typography } from "@mui/material";
export default function Hero() {
    const brands = [
        { src: "/icons/calvin-klein.png", alt: "calvin-klein" },
        { src: "/icons/prada.png", alt: "prada" },
        { src: "/icons/louis-vuitton.png", alt: "louis-vuitton" },
    ];
    return (
        <Box className="hero">
            <Box className="hero-content">
                <Typography variant="h3" fontWeight="bold">
                    الأناقة تبدأ هنا
                </Typography>
                <Typography variant="h5" mt={2}>
                    تسوق أحدث صيحات الموضة بخطوات بسيطة!
                </Typography>
            </Box>
            <Box className="brands flex">
                <Box className="brand flex">
                    {brands.map((brand, index) => (
                        <img key={index} src={brand.src} alt={brand.alt} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
