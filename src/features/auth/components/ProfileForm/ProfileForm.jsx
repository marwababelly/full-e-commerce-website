
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { updateProfile } from "../../api/authApi.js";
import styles from "./ProfileForm.module.css";

function ProfileForm() {
  const { user, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    address: user?.address || "",
  });

  const [passwordData, setPasswordData] = useState({
    password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone_number: user?.phone_number || "",
      address: user?.address || "",
    });

    setPasswordData({
      password: "",
      new_password: "",
      new_password_confirmation: "",
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const changingPassword =
      passwordData.password ||
      passwordData.new_password ||
      passwordData.new_password_confirmation;

    if (changingPassword) {
      if (
        !passwordData.password ||
        !passwordData.new_password ||
        !passwordData.new_password_confirmation
      ) {
        setError("Please fill in all password fields.");
        return;
      }

      if (
        passwordData.new_password !==
        passwordData.new_password_confirmation
      ) {
        setError("New password and confirmation do not match.");
        return;
      }
    }

    const payload = { ...formData };

    if (changingPassword) {
      Object.assign(payload, passwordData);
    }

    try {
      setLoading(true);

      const response = await updateProfile(payload);

      const updatedUser =
        response?.data?.user ||
        response?.user ||
        { ...user, ...formData };

      updateUser(updatedUser);

      setPasswordData({
        password: "",
        new_password: "",
        new_password_confirmation: "",
      });

      setSuccess(response?.message || "Profile updated successfully.");
    } catch (err) {
      const validationErrors = err.response?.data?.errors;

      const firstValidationError = validationErrors
        ? Object.values(validationErrors).flat()[0]
        : null;

      setError(
        firstValidationError ||
          err.response?.data?.message ||
          err.message ||
          "Could not update profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.profileForm}>
      <h2 className={styles.title}>Edit Your Profile</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.fieldsRow}>
          <div className={styles.field}>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.fieldsRow}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              id="phone_number"
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.fieldsRow}>
          <div className={styles.field}>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.passwordSection}>
          <h3 className={styles.passwordTitle}>Password Changes</h3>

          <input
            className={styles.passwordInput}
            type="password"
            name="password"
            placeholder="Current Password"
            value={passwordData.password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />

          <input
            className={styles.passwordInput}
            type="password"
            name="new_password"
            placeholder="New Password"
            value={passwordData.new_password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />

          <input
            className={styles.passwordInput}
            type="password"
            name="new_password_confirmation"
            placeholder="Confirm New Password"
            value={passwordData.new_password_confirmation}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
        </div>

        {error && (
          <p role="alert" style={{ color: "red" }}>
            {error}
          </p>
        )}

        {success && (
          <p role="status" style={{ color: "green" }}>
            {success}
          </p>
        )}

        <div className={styles.actions}>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            className={styles.saveButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfileForm;
