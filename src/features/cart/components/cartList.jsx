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

const handleRemoveItem = async (id) => {
  try {
    const response = await fetch(`/api/remove-item/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      console.error('Failed to remove item from backend');
      alert('فشل حذف المنتج من الخادم، يجيب المحاولة لاحقاً');
    }
  } catch (error) {
    console.error('Error connecting to API:', error);
    alert(' حدث خطأ في الاتصال بالخادم.');
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
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
}