import React, { useState } from 'react';
import CartItem from './cartItem';
import cartMockData from './cartMockData';
import cartListStyle from './cartList.module.css';

export default function CartList({ items, onUpdateQuantity, onRemoveItem }) {
  const [localItems, setLocalItems] = useState(cartMockData);

  const currentItems = items || localItems;

  const handleUpdateQty = (id, newCount) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(id, newCount);
    } else {
      setLocalItems(prev =>
        prev.map(item => (item.id === id ? { ...item, count: newCount } : item))
      );
    }
  };

  const handleRemove = (id) => {
    if (onRemoveItem) {
      onRemoveItem(id);
    } else {
      setLocalItems(prev => prev.filter(item => item.id !== id));
    }
  };

  if (!currentItems || currentItems.length === 0) {
    return (
      <div className={cartListStyle.emptyCart}>
        <h3>السلة فارغة حالياً</h3>
      </div>
    );
  }

  return (
    <div className={cartListStyle.cartListContainer}>
      {/* الهيدر المطلوب في Figma */}
      <div className={cartListStyle.cartHeader}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* عناصر السلة */}
      <div className={cartListStyle.itemsWrapper}>
        {currentItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={handleUpdateQty}
            onRemoveItem={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}