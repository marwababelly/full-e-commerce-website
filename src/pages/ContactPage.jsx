import React from 'react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPageContainer}>
      {/* مسار الصفحة */}
      <div className={styles.breadcrumb}>
        Home / <span>Contact</span>
      </div>

      <div className={styles.contactLayout}>
        {/* القسم الأيمن:   */}
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

        {/* القسم الأيسر:    */}
        <form className={styles.formBox} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputsGrid}>
            <input 
              type="text" 
              placeholder="Your Name *" 
              className={styles.inputField} 
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email *" 
              className={styles.inputField} 
              required 
            />
            <input 
              type="tel" 
              placeholder="Your Phone *" 
              className={styles.inputField} 
              required 
            />
          </div>

          <textarea 
            placeholder="Your Massage" 
            className={styles.textareaField} 
            required
          ></textarea>

          <div className={styles.submitBtnContainer}>
            <button type="submit" className={styles.sendBtn}>
              Send Massage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}