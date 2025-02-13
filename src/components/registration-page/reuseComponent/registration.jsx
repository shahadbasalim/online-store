import "./registration.css";
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export default function Registration({
    bgImg,
    title,
    hasConfirmPassword = false,
    buttonText,
    errorMessage,
    onSubmit,
    onNavigate,
    navigateTo,
    showForgotPasswordButton = false,
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        if (email && password && (!hasConfirmPassword || confirmPassword)) {
            if (hasConfirmPassword && password !== confirmPassword) {
                onSubmit("كلمة المرور غير متطابقة.");
            } else {
                onSubmit();
            }
        } else {
            onSubmit("يرجى ملء جميع الحقول.");
        }
    };

    return (
        <Container className="registration flex">
            <Box className="registration-content flex">
                <Box className="form">
                    <Typography variant="h3" className="title">
                        {title}
                    </Typography>
                    <TextField
                        fullWidth
                        variant="standard"
                        label="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        variant="standard"
                        label="كلمة المرور"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {hasConfirmPassword && (
                        <TextField
                            fullWidth
                            variant="standard"
                            label="تأكيد كلمة المرور"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    )}
                    {errorMessage && (
                        <Typography
                            color="error"
                            variant="body2"
                            sx={{ mt: 1 }}
                        >
                            {errorMessage}
                        </Typography>
                    )}
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 2 }}
                    >
                        {buttonText}
                    </Button>
                    {onNavigate && (
                        <Button
                            fullWidth
                            variant="outlined"
                            color="secondary"
                            onClick={() => onNavigate(navigateTo)}
                            sx={{ mt: 1 }}
                        >
                            {navigateTo === "/signup"
                                ? "تسجيل جديد"
                                : "تسجيل الدخول"}
                        </Button>
                    )}
                    {showForgotPasswordButton && (
                        <Button
                            sx={{
                                mt: 1.5,
                                color: "var(--blue)",
                                float: "left",
                            }}
                        >
                            نسيان كلمة المرور؟
                        </Button>
                    )}
                </Box>
                <Box className="shopping-img flex">
                    <img src={bgImg} alt="shopping" />
                </Box>
            </Box>
        </Container>
    );
}
