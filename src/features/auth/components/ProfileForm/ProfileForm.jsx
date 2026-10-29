
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./ProfileForm.module.css";

function ProfileForm() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("authProfile") || "null");

      return saved || {
        firstName: user?.firstName || user?.name || "",
        lastName: user?.lastName || "",
        email: user?.email || user?.emailOrPhone || "",
        address: "",
      };
    } catch {
      return {
        firstName: user?.firstName || user?.name || "",
        lastName: user?.lastName || "",
        email: user?.email || user?.emailOrPhone || "",
        address: "",
      };
    }
  });

  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((previous) => ({ ...previous, [name]: value }));
    setMessage("");
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswords((previous) => ({ ...previous, [name]: value }));
    setMessage("");
  };

  const handleCancel = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("authProfile") || "null");

      setProfile(saved || {
        firstName: user?.firstName || user?.name || "",
        lastName: user?.lastName || "",
        email: user?.email || user?.emailOrPhone || "",
        address: "",
      });
    } catch {
      setMessage("Could not restore saved profile.");
      return;
    }

    setPasswords({ current: "", next: "", confirm: "" });
    setMessage("");
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (passwords.next || passwords.current || passwords.confirm) {
      if (!passwords.current || !passwords.next || !passwords.confirm) {
        setMessage("Fill in all password fields to change your password.");
        return;
      }

      if (passwords.next.length < 6) {
        setMessage("New password must be at least 6 characters.");
        return;
      }

      if (passwords.next !== passwords.confirm) {
        setMessage("New password and confirmation do not match.");
        return;
      }

      setMessage(
        "Profile saving is available, but password changes need a separate secure authentication flow."
      );
      return;
    }

    try {
      localStorage.setItem("authProfile", JSON.stringify(profile));
      setMessage("Profile changes saved successfully.");
    } catch {
      setMessage("Could not save changes. Please try again.");
    }
  };

  return (
    <section className={styles.profileForm}>
      <h2 className={styles.title}>Edit Your Profile</h2>

      <form onSubmit={handleSave}>
        <div className={styles.fieldsRow}>
          <div className={styles.field}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={profile.firstName}
              onChange={handleProfileChange}
              placeholder="First name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={profile.lastName}
              onChange={handleProfileChange}
              placeholder="Last name"
            />
          </div>
        </div>

        <div className={styles.fieldsRow}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              value={profile.address}
              onChange={handleProfileChange}
              placeholder="Address"
            />
          </div>
        </div>

        <div className={styles.passwordSection}>
          <h3 className={styles.passwordTitle}>Password Changes</h3>

          <input
            className={styles.passwordInput}
            type="password"
            name="current"
            value={passwords.current}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            autoComplete="current-password"
          />

          <input
            className={styles.passwordInput}
            type="password"
            name="next"
            value={passwords.next}
            onChange={handlePasswordChange}
            placeholder="New Password"
            autoComplete="new-password"
          />

          <input
            className={styles.passwordInput}
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handlePasswordChange}
            placeholder="Confirm New Password"
            autoComplete="new-password"
          />
        </div>

        {message && <p role="status">{message}</p>}

        <div className={styles.actions}>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button className={styles.saveButton} type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfileForm;
