import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function OrderSummary({
    totalProductsPrice,
    shippingFee,
    applyDiscount,
    finalPrice,
}) {
    const [discountCode, setDiscountCode] = useState("");

    return (
        <Box sx={{ mt: 4, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
                ملخص الطلب
            </Typography>
            <Box display="flex" justifyContent="space-between">
                <Typography>إجمالي سعر المنتجات:</Typography>
                <Typography>{totalProductsPrice} ر.س</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography>سعر الشحن:</Typography>
                <Typography>{shippingFee} ر.س</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
                <Typography variant="h6">المجموع النهائي:</Typography>
                <Typography variant="h6">{finalPrice} ر.س</Typography>
            </Box>

            {/* Discount code */}
            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
                <TextField
                    label="أدخل كود الخصم"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={() => applyDiscount(discountCode)}
                >
                    تطبيق
                </Button>
            </Box>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, py: 1.5, fontSize: "1rem" }}
            >
                الدفع
            </Button>
        </Box>
    );
}
