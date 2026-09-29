import { useState } from "react";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.title}>Create an account</h1>
      <p className={styles.subtitle}>Enter your details below</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label htmlFor="name" className={styles.visuallyHidden}>
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="emailOrPhone" className={styles.visuallyHidden}>
          Email or Phone Number
        </label>
        <input
          id="emailOrPhone"
          type="text"
          name="emailOrPhone"
          placeholder="Email or Phone Number"
          className={styles.input}
          value={formData.emailOrPhone}
          onChange={handleChange}
        />

        <label htmlFor="password" className={styles.visuallyHidden}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className={styles.createBtn}>
          Create Account
        </button>

        <button type="button" className={styles.googleBtn}>
          <svg className={styles.googleIcon} viewBox="0 0 18 18" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.95 10.7A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.17.29-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58z"
            />
          </svg>
          Sign up with Google
        </button>
      </form>

      <p className={styles.loginText}>
        Already have account?{" "}
        <a href="#" className={styles.loginLink}>
          Log in
        </a>
      </p>
    </div>
  );
}

export default RegisterForm;
