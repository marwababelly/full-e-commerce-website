import React from 'react';
import cartItemStyle from './cartItem.module.css';

export default function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  const handleDecrease = () => {
    if (item.count > 1 && onUpdateQuantity) {
      onUpdateQuantity(item.id, -1);
    }
  };

  const handleIncrease = () => {
    if (onUpdateQuantity) {
      onUpdateQuantity(item.id, 1);
    }
  };

  return (
    <div className={cartItemStyle.cartItemRow}>
      <div className={cartItemStyle.productCol}>
        <div className={cartItemStyle.imgWrapper}>
          <img src={item.image} alt={item.title} className={cartItemStyle.productImg} />
          {/* زر حذف احترافي */}
          <button
            className={cartItemStyle.removeBtn}
            onClick={() => onRemoveItem(item.id)}
            title="Remove item"
            style={{ cursor: 'pointer', zIndex: 10 }}
          >
            ✕
          </button>
        </div>
        <span className={cartItemStyle.productTitle}>{item.title}</span>
      </div>
      
      <div className={cartItemStyle.priceCol}>
        ${item.price}
      </div>
      
      <div className={cartItemStyle.quantityCol}>
        <div className={cartItemStyle.quantityBox}>
          <button onClick={handleDecrease} className={cartItemStyle.qtyBtn}>-</button>
          <span className={cartItemStyle.qtyNumber}>
            {item.count < 10 ? `0${item.count}` : item.count}
          </span>
          <button onClick={handleIncrease} className={cartItemStyle.qtyBtn}>+</button>
        </div>
      </div>
      
      <div className={cartItemStyle.subtotalCol}>
        ${item.price * item.count}
      </div>

      <button 
        onClick={() => onRemoveItem(item.id)}
        style={{ color: '#db4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline', marginTop: '10px' }}
      >
        Remove
      </button>
    </div>
  );
}