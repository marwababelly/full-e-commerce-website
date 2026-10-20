import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CartActions.module.css';

const CartActions = () => {
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate('/');
  };

const handleUpdateCart = () => {
  window.location.reload();
};
  return (
    <div className={styles.actionsContainer}>
      <button
        type="button"
        className={styles.btnOutline}
        onClick={handleReturnToShop}
      >
        Return To Shop
      </button>
      <button
        type="button"
        className={styles.btnOutline}
        onClick={handleUpdateCart}
      >
        Update Cart
      </button>
    </div>
  );

};

export default CartActions;

