import styles from "./Checkout.module.css";

export default function BillingForm({ form, handleChange, saveInfo, setSaveInfo }) {
  return (
    <form className={styles.billingSection}>
      <div className={styles.formGroup}>
        <label>
          First Name<span>*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          Street Address<span>*</span>
        </label>
        <input
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Apartment, floor, etc. (optional)</label>
        <input
          type="text"
          name="apartment"
          value={form.apartment}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          Town/City<span>*</span>
        </label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          Phone Number<span>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          Email Address<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
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
  );
}