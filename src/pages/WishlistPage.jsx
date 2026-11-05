import { useWishlist } from "../features/WishlistContext";
import ProductCard from "../features/Products/components/ProductCard";
import styles from "./WishlistPage.module.css";

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <h2>Your Wishlist is Empty</h2>
        <p>Browse products and click the heart icon to save them here.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wishlist ({wishlistItems.length})</h1>
      <div className={styles.grid}>
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}