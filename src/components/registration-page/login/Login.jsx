import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../reuseComponent/registration";

export default function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (error) => {
        if (error) {
            setErrorMessage(error);
        } else {
            navigate("/");
            

        }
    };

    return (
        <Registration
            bgImg="/shopping-backgrounds/bg1.jpg"
            title="تسجيل الدخول"
            buttonText="تسجيل الدخول"
            onSubmit={handleLogin}
            errorMessage={errorMessage}
            onNavigate={navigate}
            navigateTo="/signup"
            showForgotPasswordButton={true}
        />
    );
}
