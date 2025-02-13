import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, selectedSize, selectedColor, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) =>
                    item.id === product.id &&
                    item.selectedSize === selectedSize &&
                    item.selectedColor === selectedColor
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id &&
                    item.selectedSize === selectedSize &&
                    item.selectedColor === selectedColor
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [
                ...prevCart,
                { ...product, selectedSize, selectedColor, quantity },
            ];
        });
    };

    // Update quantity from cart page
    const updateQuantity = (id, selectedSize, selectedColor, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
                    ? { ...item, quantity: Math.max(1, newQuantity) }
                    : item
            )
        );
    };

    // Delete product function
    const removeFromCart = (id, selectedSize, selectedColor) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) =>
                    !(
                        item.id === id &&
                        item.selectedSize === selectedSize &&
                        item.selectedColor === selectedColor
                    )
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}
