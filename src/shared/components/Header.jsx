import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
  { to: "/register", label: "Sign Up" },
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm}`);
      setSearchTerm(""); 
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <p className={styles.promo}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link to="/products" className={styles.promoLink}>
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
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            
            <form className={styles.search} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="What are you looking for?"
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className={styles.searchButton}
                aria-label="Search"
              >
                🔍
              </button>
            </form>

            <Link
              to="/wishlist"
              className={styles.iconButton}
              aria-label="Wishlist"
            >
              ♡
            </Link>

            <Link
              to="/cart"
              className={styles.iconButton}
              aria-label="Cart"
            >
              🛒
            </Link>

            <Link
              to="/account"
              className={styles.iconButton}
              aria-label="Account"
            >
              👤
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;