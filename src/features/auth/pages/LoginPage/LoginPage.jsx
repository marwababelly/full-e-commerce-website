import LoginForm from "../../components/LoginForm/LoginForm";
import AuthNavbar from "../../components/AuthNavbar/AuthNavbar";
import styles from "./LoginPage.module.css";
import loginIllustration from "../../assets/login-illustration.png";

function LoginPage() {
  return (
    <>
      <AuthNavbar />

      <main className={styles.loginPage}>

        <div className={styles.illustration}>
          <img
            src={loginIllustration}
            alt="Login illustration"
          />
        </div>

        <div className={styles.formContainer}>
          <LoginForm />
        </div>

      </main>
    </>
  );
}

export default LoginPage;