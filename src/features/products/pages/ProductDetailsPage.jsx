import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./api/productsApi";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // كل ما الـ ID يتغير في الرابط، بيجيب المنتج الجديد

  if (loading) return <p style={{ padding: "100px", textAlign: "center" }}>Loading product...</p>;
  if (error || !product) return <p style={{ padding: "100px", textAlign: "center" }}>Product not found.</p>;

  // بنجهز الصور (لو الـ API جاب مصفوفة صور، بنستخدمها. لو جاب صورة وحدة، بنستخدمها لوحدها)
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <main className={styles.page}>
      <div className={styles.topSection}>
        {/* بنبعت الصور الصح للمعرض */}
        <ProductGallery images={productImages} />
        
        {/* بنبعت بيانات المنتج الصح */}
        <ProductInfo product={product} />
      </div>

      <ProductTabs description={product.description} />
      <RelatedProducts products={[]} />
    </main>
  );
}

export default ProductDetailsPage;