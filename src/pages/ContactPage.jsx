import React, { useState } from 'react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  // 1.  لحفظ حقول الإدخال
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // تحديث القيم عند الكتابة في الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 2. دالة إرسال البيانات إلى الـ API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('https://your-api-endpoint-url.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'تم إرسال رسالتك بنجاح وسنتواصل معك قريباً!' });
        // تصفير الحقول بعد الإرسال الناجح
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: data.message || 'حدث خطأ ما، يرجى المحاولة مرة أخرى.' });
      }
    } catch (error) {
      console.error('API Error:', error);
      setStatusMessage({ type: 'error', text: 'فشل الاتصال بالخادم (Server Error).' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactPageContainer}>
      {/* مسار الصفحة */}
      <div className={styles.breadcrumb}>
        Home / <span>Contact</span>
      </div>

      <div className={styles.contactLayout}>
        {/* القسم الأيمن: معلومات الاتصال */}
        <div className={styles.infoBox}>
          {/* قسم الاتصال */}
          <div className={styles.infoGroup}>
            <div className={styles.infoHeader}>
              <div className={styles.iconCircle}>📞</div>
              <h3>Call To Us</h3>
            </div>
            <p className={styles.infoText}>We are available 24/7, 7 days a week.</p>
            <p className={styles.infoText}>Phone: +8801611112222</p>
          </div>

          <hr className={styles.divider} />

          {/* قسم الكتابة */}
          <div className={styles.infoGroup}>
            <div className={styles.infoHeader}>
              <div className={styles.iconCircle}>✉️</div>
              <h3>Write To US</h3>
            </div>
            <p className={styles.infoText}>
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className={styles.infoText}>Emails: customer@exclusive.com</p>
            <p className={styles.infoText}>Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* القسم الأيسر: نموذج إرسال الرسالة */}
        <form className={styles.formBox} onSubmit={handleSubmit}>
          {statusMessage && (
            <div style={{
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '4px',
              backgroundColor: statusMessage.type === 'success' ? '#d4edda' : '#f8d7da',
              color: statusMessage.type === 'success' ? '#155724' : '#721c24',
              fontSize: '14px'
            }}>
              {statusMessage.text}
            </div>
          )}

          <div className={styles.inputsGrid}>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *" 
              className={styles.inputField} 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *" 
              className={styles.inputField} 
              required 
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone *" 
              className={styles.inputField} 
              required 
            />
          </div>

          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Massage" 
            className={styles.textareaField} 
            required
          ></textarea>

          <div className={styles.submitBtnContainer}>
            <button type="submit" className={styles.sendBtn} disabled={loading}>
              {loading ? 'Sending...' : 'Send Massage'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}