/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../features/auth/context/AuthContext.jsx";
import { useWishlist } from "../../features/WishlistContext";
import styles from "./Header.module.css";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, logout } = useAuth();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();
  
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // حساب عدد المنتجات في السلة
  const updateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = savedCart.reduce((sum, item) => sum + item.count, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const handleLanguageChange = () => {
    toggleLanguage();
    setIsLangOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: language === "ar" ? "الرئيسية" : "Home" },
    { to: "/contact", label: language === "ar" ? "اتصل بنا" : "Contact" },
    { to: "/about", label: language === "ar" ? "من نحن" : "About" },
    { to: "/signup", label: language === "ar" ? "تسجيل الدخول" : "Sign Up" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <p className={styles.promo}>
            {language === "ar" 
              ? "عرض الصيف لجميع ملابس السباحة وتوصيل سري مجاني - خصم 50%!" 
              : "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"}{" "}
            <Link to="/shop" className={styles.promoLink}>
              {language === "ar" ? "تسوق الآن" : "ShopNow"}
            </Link>
          </p>

          <div className={styles.languageContainer}>
            <button 
              type="button" 
              className={styles.language}
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen(!isLangOpen);
              }}
            >
              {language === "ar" ? "العربية" : "English"} <span className={styles.chevron}>▾</span>
            </button>

            {isLangOpen && (
              <ul className={styles.langDropdown}>
                <li onClick={handleLanguageChange}>
                  {language === "ar" ? "English" : "العربية"}
                </li>
              </ul>
            )}
          </div>
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
                placeholder={language === "ar" ? "ما الذي تبحث عنه؟" : "What are you looking for?"}
                className={styles.searchInput}
              />
              <button type="button" className={styles.searchButton} aria-label="Search">
                🔍
              </button>
            </div>

            <Link to="/wishlist" className={styles.iconButton} aria-label="Wishlist" style={{ position: "relative" }}>
              ♡
              {wishlistItems.length > 0 && (
                <span className={styles.cartBadge}>{wishlistItems.length}</span>
              )}
            </Link>

            <Link to="/cart" className={styles.iconButton} aria-label="Cart" style={{ position: "relative" }}>
              🛒
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/account" className={styles.iconButton} aria-label="My Account">👤</Link>
                <button type="button" className={styles.iconButton} onClick={handleLogout} aria-label="Log Out">
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/login" className={styles.iconButton} aria-label="Log In">Log In</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;