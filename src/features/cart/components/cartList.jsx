import CartItem from './cartItem';
import cartListStyle from './cartList.module.css';

export default function CartList({ items, onUpdateQuantity, onRemoveItem }) {
  if (!items || items.length === 0) {
    return (
      <div className={cartListStyle.emptyCart}>
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  return (
    <div className={cartListStyle.cartListContainer}>
      <div className={cartListStyle.cartHeader}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      <div className={cartListStyle.itemsWrapper}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
}