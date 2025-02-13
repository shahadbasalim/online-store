import { Snackbar, Alert } from "@mui/material";
import{ createContext, useState } from "react";

export const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const showSnackbar = (msg) => {
        setMessage(msg);
        setOpen(true);
    };

    const closeSnackbar = () => {
        setOpen(false);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={closeSnackbar}
            >
                <Alert onClose={closeSnackbar} severity="info">
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};
