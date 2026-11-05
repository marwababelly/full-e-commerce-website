import { Routes, Route } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import Checkout from "../features/checkout/Checkout";
import ProductDetailsPage from "../features/products/ProductDetailsPage";
import Products from "../features/Products";
import WishlistPage from "../pages/WishlistPage";
import { CartProvider } from "../features/cart/CartContext";
import { WishlistProvider } from "../features/WishlistContext";

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </WishlistProvider>
    </CartProvider>
  );
}