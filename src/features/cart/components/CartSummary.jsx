// import styles from "./CartSummary.module.css";
// const CartSummary =({subtotal=0,shipping=0,onCheckout})=>{
//   const total=subtotal+shipping;
//   return(
//     <div className={styles.box}>
//      <h3 className={styles.title}>Cart Total</h3> 
//     <div className={styles.item}>
//         <span>Subtotal:</span>
//         <span>${subtotal.toFixed(2)}</span>
//     </div>
//     <div className={styles.item}>
//         <span>Shipping:</span>
//         <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
//     </div>
//     <div className={`${styles.item} ${styles.total}`}>
//         <span>Total:</span>
//         <span>${total.toFixed(2)}</span>
//     </div>
//     <button
//         className={styles.btn}
//         onClick={onCheckout}
//         disabled={subtotal === 0}
//     >
//         Proceed to checkout
//      </button>
//     </div>

//   );
// };
// export default CartSummary;



import React from 'react';
import styles from './CartSummary.module.css';

const CartSummary = () => {
  return (
    <div className={styles.summaryCard}>
      <h3 className={styles.title}>Cart Total</h3>
      
      <div className={styles.row}>
        <span>Subtotal:</span>
        <span>$1750</span>
      </div>
      
      <div className={styles.row}>
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      
      <div className={`${styles.row} ${styles.totalRow}`}>
        <span>Total:</span>
        <span>$1750</span>
      </div>

      <button className={styles.checkoutBtn}>
        Procees to checkout
      </button>
    </div>
  );
};

export default CartSummary;