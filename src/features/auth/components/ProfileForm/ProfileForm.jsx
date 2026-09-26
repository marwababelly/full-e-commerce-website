import styles from "./ProfileForm.module.css";

function ProfileForm() {
  return (
    <section className={styles.profileForm}>
      <h2 className={styles.title}>Edit Your Profile</h2>

      <div className={styles.fieldsRow}>
        <div className={styles.field}>
          <label>First Name</label>
          <input type="text" placeholder="Md" />
        </div>

        <div className={styles.field}>
          <label>Last Name</label>
          <input type="text" placeholder="Rimel" />
        </div>
      </div>

      <div className={styles.fieldsRow}>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" placeholder="rimel@gmail.com" />
        </div>

        <div className={styles.field}>
          <label>Address</label>
          <input
            type="text"
            placeholder="Kingston, 5236, United State"
          />
        </div>
      </div>

      <div className={styles.passwordSection}>
        <h3 className={styles.passwordTitle}>
          Password Changes
        </h3>

        <input
          className={styles.passwordInput}
          type="password"
          placeholder="Current Password"
        />

        <input
          className={styles.passwordInput}
          type="password"
          placeholder="New Password"
        />

        <input
          className={styles.passwordInput}
          type="password"
          placeholder="Confirm New Password"
        />
      </div>

      <div className={styles.actions}>
        <button
          className={styles.cancelButton}
          type="button"
        >
          Cancel
        </button>

        <button
          className={styles.saveButton}
          type="button"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}

export default ProfileForm;
