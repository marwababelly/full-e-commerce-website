import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={styles.loginForm}>

      <h1>Log in to Exclusive</h1>

      <p className={styles.subtitle}>
        Enter your details below
      </p>

      <input
        className={styles.input}
        type="text"
        placeholder="Email or Phone Number"
      />

      <input
        className={styles.input}
        type="password"
        placeholder="Password"
      />

      <button
        className={styles.loginButton}
        type="button"
      >
        Log In
      </button>

      <button
        className={styles.forgotButton}
        type="button"
      >
        Forgot Password?
      </button>

    </div>
  );
}

export default LoginForm;