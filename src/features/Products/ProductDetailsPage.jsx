import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./api/productsApi";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const { id } = useParams(); // بنجيب الـ ID من الرابط (مثلاً /product/1)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id); // بنجيب المنتج بالـ ID
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]); // كل ما الـ ID يتغير، بيجيب منتج جديد

  if (loading) return <p style={{ padding: "100px", textAlign: "center" }}>Loading product...</p>;
  if (!product) return <p style={{ padding: "100px", textAlign: "center" }}>Product not found.</p>;

  // بنجهز مصفوفة صور (لو المنتج له صور كتير، بناخدها. لو صورة واحدة، بنكررها عشان المعرض يبان)
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, product.image, product.image, product.image]; 

  return (
    <main className={styles.page}>
      <div className={styles.topSection}>
        {/* بنبعت الصور للمعرض */}
        <ProductGallery images={productImages} />
        
        {/* بنبعت بيانات المنتج */}
        <ProductInfo product={product} />
      </div>

      <ProductTabs description={product.description} />
      <RelatedProducts products={[]} />
    </main>
  );
}

export default ProductDetailsPage;