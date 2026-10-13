import styles from "./RelatedProducts.module.css";

function RelatedProducts({ products = [] }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionLabel}>
        <span className={styles.labelMark}></span>
        <span>Related Items</span>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.imageBox}>
              {product.discountPercent > 0 && (
                <span className={styles.discount}>
                  -{product.discountPercent}%
                </span>
              )}

              <button
                type="button"
                className={styles.wishlist}
                aria-label={`Add ${product.title} to wishlist`}
              >
                ♡
              </button>

              <img
                className={styles.productImage}
                src={product.image}
                alt={product.title}
              />

              <button type="button" className={styles.addToCart}>
                Add To Cart
              </button>
            </div>

            <h3 className={styles.productTitle}>{product.title}</h3>

            <div className={styles.priceRow}>
              <span className={styles.price}>${product.price.toFixed(2)}</span>

              {product.oldPrice != null && (
                <span className={styles.oldPrice}>
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className={styles.rating}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.reviewCount}>
                ({product.reviewsCount})
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;