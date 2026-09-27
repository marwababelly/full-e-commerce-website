import React, { useState } from 'react';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [saveInfo, setSaveInfo] = useState(true);

  // بيانات صور افتراضية لمطابقة العرض بدون باك إند
  const dummyItems = [
    {
      id: 1,
      name: 'LCD Monitor',
      price: '$650',
      image: 'https://via.placeholder.com/54?text=Monitor', // استبدال الصورة بالمسار المحلي إن وجد
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: '$1100',
      image: 'https://via.placeholder.com/54?text=Gamepad',
    },
  ];

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Billing Details</h1>

      <div className={styles.checkoutLayout}>
        {/* القسم الأيسر: بيانات الفاتورة */}
        <form className={styles.billingSection} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label>First Name<span>*</span></label>
            <input type="text" className={styles.inputField} required />
          </div>

          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input type="text" className={styles.inputField} />
          </div>

          <div className={styles.formGroup}>
            <label>Street Address<span>*</span></label>
            <input type="text" className={styles.inputField} required />
          </div>

          <div className={styles.formGroup}>
            <label>Apartment, floor, etc. (optional)</label>
            <input type="text" className={styles.inputField} />
          </div>

          <div className={styles.formGroup}>
            <label>Town/City<span>*</span></label>
            <input type="text" className={styles.inputField} required />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number<span>*</span></label>
            <input type="tel" className={styles.inputField} required />
          </div>

          <div className={styles.formGroup}>
            <label>Email Address<span>*</span></label>
            <input type="email" className={styles.inputField} required />
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className={styles.checkboxInput}
            />
            <label htmlFor="saveInfo" className={styles.checkboxLabel}>
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        {/* القسم الأيمن: ملخص الطلب والدفع */}
        <div className={styles.orderSection}>
          {/* قائمة المنتجات */}
          {dummyItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <span className={styles.itemName}>{item.name}</span>
              </div>
              <span className={styles.itemPrice}>{item.price}</span>
            </div>
          ))}

          {/* المجاميع */}
          <div className={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>Total:</span>
            <span>$1750</span>
          </div>

          {/* خيارات طرق الدفع */}
          <div className={styles.paymentOptions}>
            <div className={styles.paymentOption}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className={styles.radioInput}
                />
                Bank
              </label>
              <div className={styles.bankIcons}>
                <span style={{ fontSize: '12px', color: '#666' }}>[Bkash/Visa/MasterCard]</span>
              </div>
            </div>

            <div className={styles.paymentOption}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className={styles.radioInput}
                />
                Cash on delivery
              </label>
            </div>
          </div>

          {/* حقل الكوبون */}
          <div className={styles.couponGroup}>
            <input
              type="text"
              placeholder="Coupon Code"
              className={styles.couponInput}
            />
            <button className={styles.couponBtn} type="button">
              Apply Coupon
            </button>
          </div>

          {/* زر التأكيد */}
          <button className={styles.placeOrderBtn} type="button">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;