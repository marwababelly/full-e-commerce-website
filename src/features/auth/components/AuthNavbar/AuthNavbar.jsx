import { useState } from "react";
import styles from "./AuthNavbar.module.css";

function AuthNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    return (
        
    <header className={styles.headerContainer}>
    
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
        <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>


            {isLangOpen && (
            <ul className={styles.langDropdown}>
                <li onClick={() => handleLanguageChange("English")}>English</li>
                <li onClick={() => handleLanguageChange("العربية")}>العربية</li>
            </ul>
            )}
        </div>


        </div>

    {/* ==================navbar================== */}
        <nav className={styles.navbar}>
        <div className={styles.logo}>Exclusive</div>

        <div className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ""}`}>
            <a href="#" >Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Sign Up</a>
        </div>

        <div className={styles.rightActions}>
            <div className={styles.searchBox}>
            <input type="text" placeholder="What are you looking for?" className={styles.searchInput} />
            <button className={styles.searchButton}>
                <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>

            <button className={styles.hamburgerBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            
            
            {isMenuOpen ? (
                <svg className={styles.hamburgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            ) : (
                <svg className={styles.hamburgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            )}
            </button>
        </div>
        </nav>
    </header>
    );
}

export default AuthNavbar;