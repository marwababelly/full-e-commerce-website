import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
const from = location.state?.from?.pathname || "/";
console.log("Saved destination:", location.state?.from);
console.log("Redirect path:", from);
async function handleSubmit(event) {
  event.preventDefault();
  setError("");
  setLoading(true);

  try {
    await login({ username, password });

console.log("Login successful");
console.log("Navigating to:", from);

navigate(from, { replace: true });
  } catch (err) {
    setError(err.message || "Login failed. Please try again.");
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
          type="text"
          placeholder="Username"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
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
