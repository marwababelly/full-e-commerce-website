import HeroSection from "../features/products/components/HeroSection";
import FlashSalesSection from "../features/products/components/FlashSalesSection";
import BrowseByCategory from "../features/products/components/BrowseByCategory";
import BestSellingSection from "../features/products/components/BestSellingSection";
import MusicBanner from "../features/products/components/MusicBanner";
import ExploreProductsSection from "../features/products/components/ExploreProductsSection";
import NewArrivalSection from "../features/products/components/NewArrivalSection";
import ServicesSection from "../features/products/components/ServicesSection";
import { useProducts } from "../features/products/hooks/useProducts";
import styles from "./HomePage.module.css";

const FLASH_SALE_DURATION_MS = 3 * 24 * 60 * 60 * 1000;
const flashSaleEnd = Date.now() + FLASH_SALE_DURATION_MS;

const HomePage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p style={{ padding: 40, textAlign: "center" }}>Loading products...</p>;
  if (error) return <p style={{ padding: 40, textAlign: "center" }}>Error: {error.message}</p>;

  // تأمين ضد أي نقص في عدد المنتجات اللي جاية من الـ API
  const safeProducts = products || [];
  
  const flashSaleProducts = safeProducts.slice(0, 8);
  const bestSellingProducts = safeProducts.slice(4, 8);
  const exploreProducts = safeProducts.slice(8, 16);

  return (
    <div className={styles.page}>
      <HeroSection />
      
      {flashSaleProducts.length > 0 && (
        <FlashSalesSection
          products={flashSaleProducts}
          flashSaleEnd={flashSaleEnd}
        />
      )}
      
      <BrowseByCategory />
      
      {bestSellingProducts.length > 0 && (
        <BestSellingSection products={bestSellingProducts} />
      )}
      
      <MusicBanner />
      
      {exploreProducts.length > 0 && (
        <ExploreProductsSection products={exploreProducts} />
      )}
      
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;