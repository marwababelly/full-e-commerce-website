import React from 'react';

import CartList from '../features/cart/components/cartList';
import CartActions from '../features/cart/components/CartActions';
import CouponForm from "../features/cart/components/CouponForm";
import CartSummary from '../features/cart/components/CartSummary';
import Checkout from '../features/Checkout';

function App() {
  return (
    <>
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '80px 0' }}>
      <div style={{ maxWidth: '1170px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* جدول المنتجات */}
        <CartList />

        {/* أزرار التحكم */}
        <div style={{ marginTop: '24px', marginBottom: '80px' }}>
          <CartActions />
        </div>

        {/* قسم الكوبون وملخص الحساب */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          gap: '30px'
        }}>
          <CouponForm />
          <CartSummary />
        </div>

      </div>
    </div>

    <Checkout/>
    </>
  );
}

export default App;