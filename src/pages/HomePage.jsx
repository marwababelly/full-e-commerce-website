import HeroSection from "../features/products/components/HeroSection";
import FlashSalesSection from "../features/products/components/FlashSalesSection";
import BrowseByCategory from "../features/products/components/BrowseByCategory";
import BestSellingSection from "../features/products/components/BestSellingSection";
import MusicBanner from "../features/products/components/MusicBanner";
import ExploreProductsSection from "../features/products/components/ExploreProductsSection";
import NewArrivalSection from "../features/products/components/NewArrivalSection";
import ServicesSection from "../features/products/components/ServicesSection";
import { useHomePage } from "../features/products/hooks/useProducts";
import styles from "./HomePage.module.css";

const FLASH_SALE_DURATION_MS = 3 * 24 * 60 * 60 * 1000;
const flashSaleEnd = Date.now() + FLASH_SALE_DURATION_MS;

const HomePage = () => {
  const { data, loading, error } = useHomePage();

  if (loading) return <p style={{ padding: 40 }}>Loading...</p>;
  if (error) return <p style={{ padding: 40, color: "red" }}>Error: {error.message}</p>;
  if (!data) return <p style={{ padding: 40 }}>No data</p>;

  return (
    <div className={styles.page}>
      <HeroSection categories={data.categories} />
      <FlashSalesSection products={data.flashSales} flashSaleEnd={flashSaleEnd} />
      <BrowseByCategory categories={data.categories} />
      <BestSellingSection products={data.bestSelling} />
      <MusicBanner />
      <ExploreProductsSection products={data.explore} />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;