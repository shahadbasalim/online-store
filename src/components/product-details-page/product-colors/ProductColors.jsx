import { Box, Typography } from "@mui/material";

export default function ProductColors({
    colors,
    selectedColor,
    setSelectedColor,
}) {
    return (
        <>
            <Typography variant="body2" mt={2}>
                الألوان:
            </Typography>
            <Box className="colors flex" sx={{ gap: "10px" }}>
                {colors.map((color) => (
                    <Box
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        sx={{
                            width: 25,
                            height: 25,
                            backgroundColor: color,
                            borderRadius: "50%",
                            border:
                                selectedColor === color
                                    ? "3px solid gray"
                                    : "1px solid #000",
                            cursor: "pointer",
                            
                        }}
                    />
                ))}
            </Box>
        </>
    );
}
