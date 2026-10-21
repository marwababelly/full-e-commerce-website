/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import cartMockData from "./components/cartMockData";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(cartMockData);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <CartContext.Provider value={{ items, subtotal, shipping, total, setItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);