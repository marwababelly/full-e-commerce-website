import Navbar from "../../../../shared/components/Navbar/Navbar";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import styles from "./AccountPage.module.css";

function AccountPage() {
  return (
    <>
      <Navbar />

      <main className={styles.accountPage}>

        <div className={styles.topBar}>
          <p className={styles.breadcrumb}>
            Home <span>/</span> My Account
          </p>

          <p className={styles.welcome}>
            Welcome! <span>Md Rimal</span>
          </p>
        </div>

        <div className={styles.accountContent}>
          <AccountSidebar />

          <ProfileForm />
        </div>

      </main>
    </>
  );
}

export default AccountPage;