/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import cartMockData from "./components/cartMockData";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(cartMockData);

  const addToCart = (product) => {
    setItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: Math.max(1, item.count + amount) } : item
      )
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const shipping = 0;
  const total = subtotal + shipping;
  
  // حساب إجمالي عدد القطع في السلة
  const cartCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <CartContext.Provider
      value={{ 
        items, 
        subtotal, 
        shipping, 
        total, 
        cartCount, // <--- أضفنا هذا
        addToCart, 
        removeFromCart, 
        updateQuantity 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);