import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../reuseComponent/registration";

export default function Signup() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = (error) => {
        if (error) {
            setErrorMessage(error);
        } else {
            navigate("/");
        }
    };

    return (
        <Registration
            bgImg="/shopping-backgrounds/bg2.jpg"
            title="تسجيل جديد"
            hasConfirmPassword={true}
            buttonText="تسجيل"
            onSubmit={handleSignup}
            errorMessage={errorMessage}
            onNavigate={navigate}
            navigateTo="/login"
        />
    );
}
