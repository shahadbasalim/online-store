import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Typography,
    Box,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartTable({ cart, updateQuantity, removeFromCart }) {
    const tableHeadings = [
        "المنتج",
        "اللون",
        "الكمية",
        "السعر",
        "إجمالي السعر",
        "الحذف",
    ];
    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableHeadings.map((heading) => (
                            <TableCell
                                key={heading}
                                align="center"
                                sx={{ fontWeight: "bold" }}
                            >
                                {heading}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        objectFit: "cover",
                                    }}
                                />
                                <Typography>{item.name}</Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Box
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        background: item.selectedColor,
                                        display: "inline-block",
                                        borderRadius: "50%",
                                        border: "2px solid #ccc",
                                    }}
                                ></Box>
                            </TableCell>

                            <TableCell align="center">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <IconButton
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.selectedSize,
                                                item.selectedColor,
                                                item.quantity - 1
                                            )
                                        }
                                        disabled={item.quantity <= 1}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography sx={{ mx: 2 }}>
                                        {item.quantity}
                                    </Typography>
                                    <IconButton
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.selectedSize,
                                                item.selectedColor,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </TableCell>

                            <TableCell align="center">
                                <Typography>{item.price} ر.س</Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography>
                                    {item.price * item.quantity} ر.س
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <IconButton
                                    onClick={() =>
                                        removeFromCart(
                                            item.id,
                                            item.selectedSize,
                                            item.selectedColor
                                        )
                                    }
                                    color="error"
                                >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
