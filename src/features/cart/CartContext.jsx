/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import cartMockData from "./components/cartMockData";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(cartMockData);

  // Calculate cart totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + quantity }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          count: quantity,
        },
      ];
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        subtotal,
        shipping,
        total,
        setItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);