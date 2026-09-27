import styles from "./AccountSidebar.module.css";

function AccountSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sectionTitle}>
        Manage My Account
      </h3>

      <a className={styles.link} href="#">
        My Profile
      </a>

      <a className={styles.link} href="#">
        Address Book
      </a>

      <a className={styles.link} href="#">
        My Payment Options
      </a>

      <h3 className={styles.sectionTitle}>
        My Orders
      </h3>

      <a className={styles.link} href="#">
        My Returns
      </a>

      <a className={styles.link} href="#">
        My Cancellations
      </a>

      <h3 className={styles.sectionTitle}>
        My Wishlist
      </h3>
    </aside>
  );
}

export default AccountSidebar;