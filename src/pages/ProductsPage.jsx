import { useSearchParams } from "react-router-dom";
import ProductCard from "../features/products/components/ProductCard";
import { useHomePage, useProducts } from "../features/products/hooks/useProducts";
import styles from "./ProductsPage.module.css";


const filterMapping = {
  "electronics": ["camera", "cell phone", "computer", "smart watch", "headphone", "gamepad"],
  "gaming": ["gamepad", "computer"],
  "camera": ["camera"],
  "cell-phone": ["cell phone"],
  "computer": ["computer"],
  "gamepad": ["gamepad"],
  "headphone": ["headphone"],
  "smart-watch": ["smart watch"]
};

const ProductsPage = () => {
  const { data: homeData, loading: loadingHome } = useHomePage();
  const { products: allProducts, loading: loadingAll } = useProducts();
  const [searchParams] = useSearchParams();
  
  const filter = searchParams.get("filter");
  const searchQuery = searchParams.get("search");

  if (loadingHome || loadingAll) return <p style={{ padding: 40 }}>Loading...</p>;

  let filteredProducts = allProducts || [];
  let pageTitle = "All Products";

  if (searchQuery) {
    filteredProducts = allProducts.filter((product) => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    pageTitle = `Search Results for "${searchQuery}"`;
  } 
  else if (filter === "flash-sale") {
    filteredProducts = homeData?.flashSales || [];
    pageTitle = "Flash Sales";
  } else if (filter === "best-selling") {
    filteredProducts = homeData?.bestSelling || [];
    pageTitle = "Best Selling Products";
  } else if (filter === "explore") {
    filteredProducts = homeData?.explore || [];
    pageTitle = "Explore Our Products";
  } else if (filter) {
    const searchTerm = filter.toLowerCase();
    
    const mappedCategories = filterMapping[searchTerm] || [searchTerm];

    filteredProducts = allProducts.filter((product) => {
      const pCat = product.category ? product.category.toLowerCase().trim() : "";
      return mappedCategories.some(cat => pCat === cat || pCat.includes(cat));
    });
    
    pageTitle = filter.charAt(0).toUpperCase() + filter.slice(1).replace("-", " ") + " Products";
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{pageTitle}</h1>
        
        {filteredProducts.length === 0 ? (
          <p style={{ padding: "40px 0", fontSize: "18px", color: "#777" }}>
            No products found in this category.
          </p>
        ) : (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;