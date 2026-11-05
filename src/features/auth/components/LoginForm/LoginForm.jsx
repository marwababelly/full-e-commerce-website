import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login({ email, phone_number, password });

      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginForm}>
      <h1>Log in to Exclusive</h1>

      <p className={styles.subtitle}>
        Enter your details below
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <input
          className={styles.input}
          type="tel"
          placeholder="Phone Number"
          autoComplete="tel"
          value={phone_number}
          onChange={(event) => setPhone_number(event.target.value)}
          required
        />

        {error && (
          <p role="alert" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <button
          className={styles.loginButton}
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

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