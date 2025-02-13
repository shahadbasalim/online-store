import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Breadcrumb({ title }) {
    const navigate = useNavigate();

    return (
        <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ mb: 4, mt: 1.5 }}
            variant="body2"
        >
            <Link
                underline="hover"
                color="inherit"
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
            >
                الرئيسية
            </Link>
            <Typography color="text.primary" fontWeight="bold" variant="body2">
                {title}
            </Typography>
        </Breadcrumbs>
    );
}
