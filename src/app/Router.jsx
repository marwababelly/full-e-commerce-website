import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Checkout from "../features/Checkout";

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
}

export default Router;