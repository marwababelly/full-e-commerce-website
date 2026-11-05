import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/context/AuthContext.jsx";
import { useLanguage } from "../../context/LanguageContext";
import { useCart } from "../../features/cart/CartContext"; // تأكدي من مسار السلة
import styles from "./Header.module.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const { isAuthenticated, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const { cartItems } = useCart(); // لجلب عدد المنتجات بالسلة
  
  const navigate = useNavigate();
  const cartCount = cartItems?.length || 0;

  const navLinks = [
    { to: "/", label: language === "ar" ? "الرئيسية" : "Home" },
    { to: "/contact", label: language === "ar" ? "اتصل بنا" : "Contact" },
    { to: "/about", label: language === "ar" ? "من نحن" : "About" },
    { to: "/register", label: language === "ar" ? "تسجيل الدخول" : "Sign Up" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm}`);
      setSearchTerm(""); 
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLanguageChange = () => {
    toggleLanguage();
    setIsLangOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <p className={styles.promo}>
            {language === "ar" 
              ? "عرض الصيف لجميع ملابس السباحة وتوصيل سريع مجاني - خصم 50%!" 
              : "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"}{" "}
            <Link to="/products" className={styles.promoLink}>
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
          <Link to="/" className={styles.logo}>Exclusive</Link>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <form className={styles.search} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={language === "ar" ? "ما الذي تبحث عنه؟" : "What are you looking for?"}
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className={styles.searchButton} aria-label="Search">
                🔍
              </button>
            </form>

            <Link to="/wishlist" className={styles.iconButton} aria-label="Wishlist">♡</Link>

            <Link to="/cart" className={styles.iconButton} aria-label="Cart" style={{ position: "relative" }}>
              🛒
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/account" className={styles.iconButton} aria-label="My Account">👤</Link>
                <button type="button" className={styles.iconButton} onClick={handleLogout} aria-label="Log Out" style={{ fontSize: '12px', fontWeight: 'bold' }}>
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