import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default Router;