import { useState } from "react";
import styles from "./ProductGallery.module.css";

function ProductGallery({ images }) {
  // لو مفيش صور جاية من الأب، بنحط صورة افتراضية سليمة (مش صورة مكسورة)
  const safeImages = images && images.length > 0 
    ? images 
    : ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"];

  // بنخلي أول صورة هي المختارة
  const [selectedImage, setSelectedImage] = useState(safeImages[0]);

  return (
    <div className={styles.galleryContainer}>
      {/* الصور المصغرة على اليسار */}
      <div className={styles.thumbnails}>
        {safeImages.map((img, index) => (
          <div 
            key={index} 
            className={`${styles.thumbnailBox} ${selectedImage === img ? styles.activeThumb : ""}`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`View ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* الصورة الكبيرة */}
      <div className={styles.mainImageBox}>
        <img 
          src={selectedImage} 
          alt="Product" 
          className={styles.mainImage} 
        />
      </div>
    </div>
  );
}

export default ProductGallery;