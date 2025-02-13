import { Typography } from "@mui/material";

export default function ProductInfo({ name, description, price }) {
    return (
        <>
            <Typography variant="h4" className="title">
                {name}
            </Typography>
            <Typography variant="body1" className="paragraph">
                {description}
            </Typography>
            <Typography variant="body1" mt={2}>
                {price} ر.س
            </Typography>
        </>
    );
}
