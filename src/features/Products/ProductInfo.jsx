// ProductInfo.jsx
import { useState } from "react";
import styles from "./ProductInfo.module.css";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import QuantitySelector from "./QuantitySelector";
import DeliveryInfo from "./DeliveryInfo";

function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    // TODO: connect to cart later (coordinate with Cart teammate)
    console.log({ productId: product.id, selectedColor, selectedSize, quantity });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{product.title}</h1>

      <div className={styles.meta}>
        <span className={styles.stars}>★★★★☆</span>
        <span>({product.reviewsCount} Reviews)</span>
        <span className={product.inStock ? styles.inStock : styles.outStock}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className={styles.price}>
        ${product.price}
        {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
      </div>

      <p className={styles.description}>{product.description}</p>

      <hr className={styles.divider} />

      <ColorPicker
        colors={product.colors}
        selectedColor={selectedColor}
        onSelect={setSelectedColor}
      />

      <SizePicker
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSelect={setSelectedSize}
      />

      <div className={styles.actionsRow}>
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
        <button className={styles.buyBtn} onClick={handleBuyNow}>
          Buy Now
        </button>
        <button className={styles.wishlistBtn}>♡</button>
      </div>

      <DeliveryInfo />
    </div>
  );
}

export default ProductInfo;