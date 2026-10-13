import { useState } from "react";
import styles from "./ProductGallery.module.css";

function ProductGallery({ images = [] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  if (images.length === 0) {
    return <p>No product images available.</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            className={
              img === mainImage
                ? `${styles.thumb} ${styles.active}`
                : styles.thumb
            }
            onClick={() => setMainImage(img)}
            aria-label={`View product image ${index + 1}`}
            aria-pressed={img === mainImage}
          >
            <img
              src={img}
              alt={`Product view ${index + 1}`}
            />
          </button>
        ))}
      </div>

      <div className={styles.mainImage}>
        <img src={mainImage} alt="Product" />
      </div>
    </div>
  );
}

export default ProductGallery;