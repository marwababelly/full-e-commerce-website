import AuthNavbar from "../../components/AuthNavbar/AuthNavbar.jsx";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import registerIllustration from "../../../../assets/login-illustration.png";
import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.page}>
      <AuthNavbar />

      <main className={styles.main}>
        <div className={styles.imageBox}>
          <img
            src={registerIllustration}
            alt="Shopping cart, smartphone and shopping bags"
            className={styles.image}
          />
        </div>

        <div className={styles.formSide}>
          <RegisterForm />
        </div>
      </main>

    </div>
  );
}

export default Register;
