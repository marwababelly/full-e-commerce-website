import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    const [isLangOpen, setIsLangOpen] = useState(false);

    const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLangOpen(false);
    };

    return (
    <header className={styles.headerContainer}>

      {/* TOP BAR */}
    <div className={styles.topBar}>
        <p className={styles.topBarText}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className={styles.shopNow}>ShopNow</span>
        </p>

        <div
            className={styles.langSelector}
            onClick={() => setIsLangOpen(!isLangOpen)}
        >
            <span>{language}</span>

        <svg
            className={styles.arrowIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path
            d="M19 9L12 16L5 9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>

        {isLangOpen && (
            <ul className={styles.langDropdown}>
                <li onClick={() => handleLanguageChange("English")}>
                English
                </li>

                <li onClick={() => handleLanguageChange("العربية")}>
                العربية
                </li>
            </ul>
            )}
        </div>
    </div>


      {/* MAIN NAVBAR */}
    <nav className={styles.navbar}>

        {/* LOGO */}
        <div className={styles.logo}>
            Exclusive
        </div>


        {/* LINKS */}
        <div
            className={`${styles.links} ${
            isMenuOpen ? styles.linksOpen : ""}`}
        >
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Sign Up</a>
        </div>


        {/* RIGHT SIDE */}
        <div className={styles.rightActions}>

          {/* SEARCH */}
            <div className={styles.searchBox}>
            <input
                type="text"
                placeholder="What are you looking for?"
                className={styles.searchInput}
            />

            <button className={styles.searchButton}>
            <svg
                className={styles.icon}
                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle  cx="11" cy="11"  r="7"  strokeWidth="2"/>

                <path
                    d="M20 20L16 16" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </button>
        </div>


          {/* WISHLIST */}
        <button className={styles.iconButton} aria-label="Wishlist">
            <svg
                className={styles.icon}
                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                d="M20.8 8.6C20.8 13.7 12 19 12 19C12 19 3.2 13.7 3.2 8.6C3.2 5.8 5.2 4 7.7 4C9.3 4 10.8 4.8 12 6.1C13.2 4.8 14.7 4 16.3 4C18.8 4 20.8 5.8 20.8 8.6Z"
                strokeWidth="1.8" strokeLinecap="round"  strokeLinejoin="round" />
            </svg>
            </button>


          {/* CART */}
        <button className={styles.iconButton} aria-label="Cart">
            <svg
                className={styles.icon}
                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 4H5L7.2 15.5C7.4 16.4 8.2 17 9.1 17H17.5C18.4 17 19.2 16.4 19.4 15.5L21 8H6"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>

                <circle cx="9" cy="20" r="1.3" />
                <circle cx="18" cy="20" r="1.3" />
            </svg>
        </button>


          {/* ACCOUNT */}
        <button className={`${styles.accountButton} ${styles.active}`} aria-label="Account">
            <svg
                className={styles.accountIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="8" r="4" strokeWidth="1.8" />

            <path
                d="M4 21C4.8 16.8 7.5 14 12 14C16.5 14 19.2 16.8 20 21"
                strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
        </button>


          {/* MOBILE MENU */}
        <button className={styles.hamburgerBtn}
                onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">

            {isMenuOpen ? (
                <svg
                className={styles.hamburgerIcon}
                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                    d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ) : (
                <svg
                className={styles.hamburgerIcon}
                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                    d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )}
        </button>

        </div>
    </nav>
    </header>
    );
}

export default Navbar;