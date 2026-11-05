import React from 'react';
import styles from './CartSummary.module.css';

const CartSummary = ({ subtotal , shipping = 0, onCheckout }) => {
  const total = typeof shipping === 'number' ? subtotal + shipping : subtotal;

  return (
    <div className={styles.summaryCard}>
      <h3 className={styles.title}>Cart Total</h3>
      <div className={styles.row}>
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className={styles.row}>
        <span>Shipping:</span>
        <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
      </div>
      <div className={`${styles.row} ${styles.totalRow}`}>
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button className={styles.checkoutBtn} onClick={onCheckout} type="button">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartSummary; 