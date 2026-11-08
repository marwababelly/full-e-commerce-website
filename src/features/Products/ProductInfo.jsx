import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Hooks/Axios";
import styles from "./ProductInfo.module.css";

function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState("#A0BCE0");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#A0BCE0", "#E07575"];

  const handleBuyNow = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to add to cart.");
      return;
    }

    setLoading(true);

    try {
      // 1. تجهيز البيانات زي الـ Postman (FormData)
      const formData = new FormData();
      formData.append("product_id", product.id);
      formData.append("quantity", quantity);

      // 2. إرسال الطلب مع الهيدرز الصح
      const response = await Axios.post("add-to-cart", formData, {
        headers: {
          "Content-Type": "application/json", // زي الـ Postman
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      console.log("✅ نجح الإضافة للسيرفر:", response.data);

      // 3. تحديث الـ localStorage عشان السلة تعرض المنتجات
      const productToCart = {
        ...product,
        selectedColor,
        selectedSize,
        count: quantity,
      };

      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = savedCart.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );

      let updatedCart;
      if (existingItem) {
        updatedCart = savedCart.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, count: item.count + quantity }
            : item
        );
      } else {
        updatedCart = [...savedCart, productToCart];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated"));
      
      // 4. الانتقال للسلة
      navigate("/cart");
      
    } catch (error) {
      console.error("❌ فشل إرسال الطلب للسيرفر:", error.response || error);
      alert("Failed to add to cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className={styles.infoWrapper}>
      <h1 className={styles.title}>{product.title || "Havic HV G-92 Gamepad"}</h1>
      
      <div className={styles.rating}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.reviews}>({product.reviewsCount || 150} Reviews)</span>
        <span className={styles.inStock}>In Stock</span>
      </div>

      <div className={styles.price}>${product.price || "192.00"}</div>

      <p className={styles.description}>
        {product.description || "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
      </p>
      
      <hr className={styles.divider} />

      <div className={styles.options}>
        <div className={styles.optionRow}>
          <span className={styles.optionLabel}>Colours:</span>
          <div className={styles.colors}>
            {colors.map((color) => (
              <span 
                key={color}
                className={`${styles.colorDot} ${selectedColor === color ? styles.activeColor : ""}`} 
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></span>
            ))}
          </div>
        </div>

        <div className={styles.optionRow}>
          <span className={styles.optionLabel}>Size:</span>
          <div className={styles.sizes}>
            {sizes.map((size) => (
              <button 
                key={size} 
                className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.actionsRow}>
        <div className={styles.quantity}>
          <button onClick={handleDecrease} className={styles.qtyBtn}>-</button>
          <span className={styles.qtyNumber}>{quantity}</span>
          <button onClick={handleIncrease} className={styles.qtyBtn}>+</button>
        </div>

        <button className={styles.buyBtn} onClick={handleBuyNow} disabled={loading}>
          {loading ? "Adding..." : "Buy Now"}
        </button>

        <button className={styles.wishlistBtn}>♡</button>
      </div>

      <div className={styles.deliveryBox}>
        <div className={styles.deliveryItem}>
          <span className={styles.deliveryIcon}>🚚</span>
          <div>
            <h4>Free Delivery</h4>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        <div className={styles.deliveryItem}>
          <span className={styles.deliveryIcon}>🔄</span>
          <div>
            <h4>Return Delivery</h4>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;