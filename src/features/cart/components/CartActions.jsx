import React from 'react';
import styles from './CartActions.module.css';

const CartActions = () => {
  return (
    <div className={styles.actionsContainer}>
      <button className={styles.btnOutline}>Return To Shop</button>
      <button className={styles.btnOutline}>Update Cart</button>
    </div>
  );
};

export default CartActions;