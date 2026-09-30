// DeliveryInfo.jsx
import { useState } from "react";
import styles from "./DeliveryInfo.module.css";

function DeliveryInfo() {
  const [zipCode, setZipCode] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <span>Free Delivery</span>
        <input
          type="text"
          placeholder="Enter your postal code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <span>Return Delivery</span>
        <p>Free 30 days delivery returns</p>
      </div>
    </div>
  );
}

export default DeliveryInfo;