
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { registerUser } from "../../api/authApi";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser(formData);

      if (response.success) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          password: "",
          password_confirmation: "",
          address: "",
        });

        navigate("/login", { replace: true });
      } else {
        setError(response.message || "Registration failed.");
      }
    } catch (err) {
      const validationErrors = err.response?.data?.errors;

      const firstValidationError = validationErrors
        ? Object.values(validationErrors).flat()[0]
        : null;

      setError(
        firstValidationError ||
          err.response?.data?.message ||
          err.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.title}>Create an account</h1>

      <p className={styles.subtitle}>
        Enter your details below
      </p>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          autoComplete="given-name"
          className={styles.input}
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          autoComplete="family-name"
          className={styles.input}
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          autoComplete="tel"
          className={styles.input}
          value={formData.phone_number}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          className={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          autoComplete="new-password"
          className={styles.input}
          value={formData.password_confirmation}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="street-address"
          className={styles.input}
          value={formData.address}
          onChange={handleChange}
          required
        />

        {error && (
          <p role="alert" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className={styles.createBtn}
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={() =>
            setError(
              "Google sign-up is not available yet. Please create an account using the form."
            )
          }
        >
          <svg
            className={styles.googleIcon}
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
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
        Already have an account?{" "}
        <button
          type="button"
          className={styles.loginLink}
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </p>
    </div>
  );
}

export default RegisterForm;
