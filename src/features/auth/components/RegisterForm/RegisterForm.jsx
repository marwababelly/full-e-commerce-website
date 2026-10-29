import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const emailOrPhone = formData.emailOrPhone.trim();
    const password = formData.password;

    if (!name || !emailOrPhone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const registeredUsers = JSON.parse(
        localStorage.getItem("registeredUsers") || "[]"
      );

      const alreadyExists = registeredUsers.some(
        (user) =>
          user.emailOrPhone.toLowerCase() === emailOrPhone.toLowerCase()
      );

      if (alreadyExists) {
        setError("An account with this email or phone already exists.");
        return;
      }

      registeredUsers.push({
        name,
        emailOrPhone,
        password,
      });

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify(registeredUsers)
      );

      navigate("/login", {
        state: { message: "Account created successfully. Please log in." },
      });
    } catch {
      setError("Could not create the account. Please try again.");
    }
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
          autoComplete="name"
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
          autoComplete="username"
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
          autoComplete="new-password"
          className={styles.input}
          value={formData.password}
          onChange={handleChange}
        />

        {error && (
          <p role="alert" style={{ color: "red", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <button type="submit" className={styles.createBtn}>
          Create Account
        </button>

       <button
  type="button"
  className={styles.googleBtn}
  onClick={() =>
    setError("Google sign-up is not available yet. Please create an account using the form.")
  }
>
  Sign up with Google
</button>
      </form>

      <p className={styles.loginText}>
        Already have an account?{" "}
        <Link to="/login" className={styles.loginLink}>
          Log in
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;