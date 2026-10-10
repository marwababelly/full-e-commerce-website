import { useState, useEffect } from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import styles from "./ProductDetailsPage.module.css";

const MOCK_PRODUCT = {
  id: 1,
  title: "Havik HV G-92 Gamepad",
  price: 192,
  oldPrice: null,
  discountPercent: 0,
  rating: 4.5,
  reviewsCount: 150,
  images: [
    "/images/products/gamepad.jpg",
    "/images/products/gamepad1.jpg",
    "/images/products/gamepad2.jpg",
    "/images/products/gamepad3.jpg",
    "/images/products/gamepad4.jpg",
  ],
  category: "Gaming",
  colors: ["#A0BCE0", "#E07575"],
  sizes: ["XS", "S", "M", "L", "XL"],
  inStock: true,
  description:
    "PlayStation 5 Controller Skin. High quality vinyl with air channel adhesive, easy bubble-free installation, mess-free removal, and pressure-sensitive material.",
};

const MOCK_RELATED_PRODUCTS = [
  {
    id: 2,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discountPercent: 40,
    rating: 5,
    reviewsCount: 88,
    image: "/images/products/gamepad.jpg",
  },
  {
    id: 3,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discountPercent: 35,
    rating: 4,
    reviewsCount: 75,
    image: "/images/products/keyboard.jpg",
  },
  {
    id: 4,
    title: "IPS LCD Gaming Headphone ",
    price: 370,
    oldPrice: 400,
    discountPercent: 30,
    rating: 5,
    reviewsCount: 99,
    image: "/images/products/headphones.jpg",
  },
  {
    id: 5,
    title: "Smartwatch",
    price: 160,
    oldPrice: 170,
    discountPercent: 0,
    rating: 4,
    reviewsCount: 65,
    image: "/images/products/smartwatch.jpg",
  },
];

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProduct(MOCK_PRODUCT);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <main className={styles.page}>
      <div className={styles.topSection}>
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>

      <ProductTabs description={product.description} />

      <RelatedProducts products={MOCK_RELATED_PRODUCTS} />
    </main>
  );
}

export default ProductDetailsPage;