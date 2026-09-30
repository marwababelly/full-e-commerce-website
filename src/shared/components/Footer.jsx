import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.logo}>Exclusive</h3>
            <h4 className={styles.subheading}>Subscribe</h4>
            <p className={styles.text}>Get 10% off your first order</p>

            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button
                type="submit"
                className={styles.sendButton}
                aria-label="Subscribe"
              >
                ➤
              </button>
            </form>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Support</h4>
            <p className={styles.text}>
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>
            <p className={styles.text}>exclusive@gmail.com</p>
            <p className={styles.text}>+88015-88888-9999</p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Account</h4>
            <ul className={styles.list}>
              <li>
                <Link to="/account" className={styles.link}>
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/login" className={styles.link}>
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className={styles.link}>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className={styles.link}>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/shop" className={styles.link}>
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Link</h4>
            <ul className={styles.list}>
              <li>
                <Link to="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={styles.link}>
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/faq" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Download App</h4>
            <p className={styles.smallText}>Save $3 with App New User Only</p>

            <div className={styles.appSection}>
              <div className={styles.qrBox}>
                <div className={styles.qrPlaceholder}>QR</div>
              </div>

              <div className={styles.storeBadges}>
                <button type="button" className={styles.storeBadge}>
                  ▶ Google Play
                </button>
                <button type="button" className={styles.storeBadge}>
                   App Store
                </button>
              </div>
            </div>

            <div className={styles.socials}>
              <button type="button" className={styles.socialIcon} aria-label="Facebook">
                f
              </button>
              <button type="button" className={styles.socialIcon} aria-label="Twitter">
                𝕏
              </button>
              <button type="button" className={styles.socialIcon} aria-label="Instagram">
                ◉
              </button>
              <button type="button" className={styles.socialIcon} aria-label="LinkedIn">
                in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;