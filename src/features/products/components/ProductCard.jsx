import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../../cart/CartContext";
// في حالة أن المجلد اسمه wishlist (بحرف صغير)
import { useWishlist } from "../../WishlistContext";

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
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const liked = isInWishlist(product.id);
  const hasDiscount = product.discountPercent > 0;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {hasDiscount && (
          <span className={styles.discount}>-{product.discountPercent}%</span>
        )}

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
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>

      <div className={styles.info}>
        <Link to={`/product/${product.id}`} className={styles.title}>
          {product.title}
        </Link>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.oldPrice > 0 && (
            <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>
          )}
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