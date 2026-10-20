import React, { useState } from 'react';
import styles from './CouponForm.module.css';

const CouponForm = ({ onApply }) => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    if (onApply) {
      const result = onApply(code);
      if (result.success) {
        setMessage({ type: 'success', text: `تم تطبيق الخصم بنجاح (${result.percent}%)!` });
      } else {
        setMessage({ type: 'error', text: 'رمز الكوبون غير صحيح' });
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <form className={styles.couponContainer} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Coupon Code" 
          className={styles.couponInput}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className={styles.applyBtn}>
          Apply Coupon
        </button>
      </form>
      {message && (
        <span style={{ 
          fontSize: '14px', 
          color: message.type === 'success' ? '#2b8a3e' : '#db4444',
          marginTop: '4px' 
        }}>
          {message.text}
        </span>
      )}
    </div>
  );
};

export default CouponForm;