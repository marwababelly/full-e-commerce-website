
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

import Navbar from "../../../../shared/components/Navbar/Navbar";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import styles from "./AccountPage.module.css";

function AccountPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar />

      <main className={styles.accountPage}>
        <div className={styles.topBar}>
          <p className={styles.breadcrumb}>
            Home <span>/</span> My Account
          </p>

          <div>
            <p className={styles.welcome}>
              Welcome! <span>{user?.firstName || user?.name || "User"}</span>
            </p>

            <button type="button" onClick={handleLogout}>
  Log Out
</button>
          </div>
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
