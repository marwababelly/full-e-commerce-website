import { CartList } from "../features/cart";
import cartMockData from "../features/cart/components/cartMockData";

function CartPage() {
  return (
    <main>
      <h1>Shopping Cart</h1>

      <CartList items={cartMockData} />
    </main>
  );
}

export default CartPage;