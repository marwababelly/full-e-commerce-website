import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Checkout from "../features/Checkout";
import LoginPage from "../features/auth/pages/LoginPage/LoginPage";
import AccountPage from "../features/auth/pages/AccountPage/AccountPage";

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
}

export default Router;