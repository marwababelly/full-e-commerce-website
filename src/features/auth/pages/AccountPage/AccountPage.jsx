
import Navbar from "../../../../shared/components/Navbar/Navbar";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./AccountPage.module.css";

function AccountPage() {
  const { user } = useAuth();

  const firstName = user?.first_name || "";

  return (
    <>
      <Navbar />

      <main className={styles.accountPage}>
        <div className={styles.topBar}>
          <p className={styles.breadcrumb}>
            Home <span>/</span> My Account
          </p>

          <p className={styles.welcome}>
            Welcome! <span>{firstName}</span>
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
