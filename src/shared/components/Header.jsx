import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/signup", label: "Sign Up" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <p className={styles.promo}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link to="/shop" className={styles.promoLink}>
              ShopNow
            </Link>
          </p>
          <button type="button" className={styles.language}>
            English <span className={styles.chevron}>▾</span>
          </button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainContent}>
          <Link to="/" className={styles.logo}>
            Exclusive
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="What are you looking for?"
                className={styles.searchInput}
              />
              <button type="button" className={styles.searchButton} aria-label="Search">
                🔍
              </button>
            </div>

            <button type="button" className={styles.iconButton} aria-label="Wishlist">
              ♡
            </button>

            <button type="button" className={styles.iconButton} aria-label="Cart">
              🛒
            </button>

            <button type="button" className={styles.iconButton} aria-label="Account">
              👤
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;