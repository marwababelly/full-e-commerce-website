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

  if (loading) return <p style={{ padding: 40 }}>Loading products...</p>;
  if (error) return <p style={{ padding: 40 }}>Error: {error.message}</p>;

  const flashSaleProducts = products.slice(0, 8);
  const bestSellingProducts = products.slice(4, 8);
  const exploreProducts = products.slice(8, 16);

  return (
    <div className={styles.page}>
      <HeroSection />
      <FlashSalesSection
        products={flashSaleProducts}
        flashSaleEnd={flashSaleEnd}
      />
      <BrowseByCategory />
      <BestSellingSection products={bestSellingProducts} />
      <MusicBanner />
      <ExploreProductsSection products={exploreProducts} />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;