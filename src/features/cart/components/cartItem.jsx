import React from 'react';
import cartItemStyle from './cartItem.module.css';

export default function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  const handleDecrease = () => {
    if (item.count > 1) {
      onUpdateQuantity(item.id, item.count - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.count + 1);
  };

  return (
    <div className={cartItemStyle.cartItemRow}>
      {/* قسم المنتج (الزر الأحمر للتكبير/الحذف + الصورة + الاسم) */}
      <div className={cartItemStyle.productCol}>
        <div className={cartItemStyle.imgWrapper}>
          <img src={item.image} alt={item.title} className={cartItemStyle.productImg} />
          <button 
            className={cartItemStyle.removeBtn} 
            onClick={() => onRemoveItem(item.id)}
            title="حذف المنتج"
          >
            ✕
          </button>
        </div>
        <span className={cartItemStyle.productTitle}>{item.title}</span>
      </div>

      {/* السعر */}
      <div className={cartItemStyle.priceCol}>
        ${item.price}
      </div>

      {/* أزرار الكمية */}
      <div className={cartItemStyle.quantityCol}>
        <div className={cartItemStyle.quantityBox}>
          <button onClick={handleDecrease} className={cartItemStyle.qtyBtn}>-</button>
          <span className={cartItemStyle.qtyNumber}>
            {item.count < 10 ? `0${item.count}` : item.count}
          </span>
          <button onClick={handleIncrease} className={cartItemStyle.qtyBtn}>+</button>
        </div>
      </div>

      {/* المجموع الفرعي */}
      <div className={cartItemStyle.subtotalCol}>
        ${item.price * item.count}
      </div>
    </div>
  );
}