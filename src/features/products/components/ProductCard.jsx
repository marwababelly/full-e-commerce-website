/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { formatPrice } from "../utils/formatPrice";
import { useWishlist } from "../../WishlistContext";
import { Axios } from "../../../Hooks/Axios";
import { useCart } from "../../cart/CartContext";

const Stars = ({ rating }) => {
  const rounded = Math.round(rating);
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rounded ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const liked = isInWishlist(product.id);
  const hasDiscount = product.discountPercent > 0;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to add to cart.");
      return;
    }

    setIsAdding(true);

    try {
      // 1. إرسال المنتج للسيرفر (نفس طريقة الـ Postman)
      const formData = new FormData();
      formData.append("product_id", product.id);
      formData.append("quantity", 1);

      await Axios.post("add-to-cart", formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      // 2. الحفظ في المتصفح عشان السلة تعرض الداتا
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = savedCart.find((item) => item.id === product.id);
      
      let updatedCart;
      if (existingItem) {
        updatedCart = savedCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        updatedCart = [...savedCart, { ...product, count: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      
      // 3. تحديث الهيدر
      window.dispatchEvent(new Event("cartUpdated"));
      
    } catch (error) {
      console.error("Failed to add to cart:", error.response || error);
      alert("Failed to add to cart. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {hasDiscount && <span className={styles.discount}>-{product.discountPercent}%</span>}
        {product.isNew && <span className={styles.newBadge}>NEW</span>}

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.iconBtn} ${liked ? styles.liked : ""}`}
            onClick={() => toggleWishlist(product)}
            aria-label="Add to wishlist"
          >
            {liked ? "❤️" : "♡"}
          </button>

          <Link to={`/product/${product.id}`} className={styles.iconBtn} aria-label="View product">
            👁
          </Link>
        </div>

        <Link to={`/product/${product.id}`} className={styles.imageLink}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </Link>

        <button 
          type="button" 
          className={styles.addToCart} 
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Add To Cart"}
        </button>
      </div>

      <div className={styles.info}>
        <Link to={`/product/${product.id}`} className={styles.title}>
          {product.title}
        </Link>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.oldPrice > 0 && <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>}
        </div>

        <div className={styles.rating}>
          <Stars rating={product.rating} />
          <span className={styles.reviews}>({product.reviewsCount})</span>
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className={styles.colors}>
            {product.colors.map((color, index) => (
              <span key={index} className={styles.colorDot} style={{ backgroundColor: color }} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;