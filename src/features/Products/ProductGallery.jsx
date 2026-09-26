import { useState } from "react";
import styles from "./ProductGallery.module.css";

function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnails}>
        {images.map((img) => (
          <button
            key={img}
            className={img === mainImage ? `${styles.thumb} ${styles.active}` : styles.thumb}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt="thumbnail" />
          </button>
        ))}
      </div>
      <div className={styles.mainImage}>
        <img src={mainImage} alt="product" />
      </div>
    </div>
  );
}

export default ProductGallery;