// import { useState } from "react";
// import styles from "./CouponForm.module.css";

// const CouponForm=({onApply})=>{
//   const[code,setCode]=useState("");
//   const[msg,setMsg]=useState("");
//   const [error, setError] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   const value = code.trim();

// if (!value) {
//       setMsg("Please enter a coupon code");
//       setError(true);
//       return;
//     }
//   const ok = onApply?.(value);

// if (ok) {
//       setMsg(`Coupon "${value.toUpperCase()}" applied successfully!`);
//       setError(false);
//       setCode("");
//     } else {
//       setMsg("Invalid coupon code. Try SAVE10, WELCOME, or VIP20");
//       setError(true);
//     }
//   };
//    const cls = error ? `${styles.msg} ${styles.err}` : `${styles.msg} ${styles.ok}`;
//  return (
//     <div className={styles.wrap}>
//     <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Coupon Code"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           className={styles.input}
//         />
//         <button
//           type="submit"
//           disabled={!code.trim()}
//           className={styles.btn}
//         >
//           Apply Coupon
//         </button>
//     </form>
//       {msg && <span className={cls}>{msg}</span>}
//     </div>
//   );
// };
// export default CouponForm;


import React from 'react';
import styles from './CouponForm.module.css';

const CouponForm = () => {
  return (
    <form className={styles.couponContainer} onSubmit={(e) => e.preventDefault()}>
      <input 
        type="text" 
        placeholder="Coupon Code" 
        className={styles.couponInput}
      />
      <button type="submit" className={styles.applyBtn}>
        Apply Coupon
      </button>
    </form>
  );
};

export default CouponForm;