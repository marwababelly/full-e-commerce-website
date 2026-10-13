import { useSearchParams } from "react-router-dom";
import ProductCard from "../features/products/components/ProductCard";
import { useProducts } from "../features/products/hooks/useProducts";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  if (loading) return <p style={{ padding: 40 }}>Loading products...</p>;
  if (error) return <p style={{ padding: 40 }}>Error: {error.message}</p>;

  let filteredProducts = products;
  let pageTitle = "All Products";

  if (filter === "best-selling") {
    filteredProducts = products.slice(4, 8);
    pageTitle = "Best Selling Products";
  } else if (filter === "flash-sale") {
    filteredProducts = products.slice(0, 8);
    pageTitle = "Flash Sales";
  } else if (filter === "explore") {
    filteredProducts = products.slice(8, 16);
    pageTitle = "Explore Our Products";
  } 
  else if (filter === "music") {
  filteredProducts = products.filter((p) => p.category === "Electronics");
  pageTitle = "Music & Audio";

} else if (filter === "gaming") {
  filteredProducts = products.filter((p) => p.category === "Gaming");
  pageTitle = "Gaming";
} else if (filter === "fashion") {
  filteredProducts = products.filter((p) => p.category === "Fashion");
  pageTitle = "Fashion";
} else if (filter === "beauty") {
  filteredProducts = products.filter((p) => p.category === "Beauty");
  pageTitle = "Beauty";
}
 else if (filter === "electronics") {
  filteredProducts = products.filter((p) => p.category === "Electronics");
  pageTitle = "Electronics";
} else if (filter === "home") {
  filteredProducts = products.filter((p) => p.category === "Home");
  pageTitle = "Home & Lifestyle";
} else if (filter === "sports") {
  filteredProducts = products.filter((p) => p.category === "Sports");
  pageTitle = "Sports & Outdoor";
} else if (filter === "toys") {
  filteredProducts = products.filter((p) => p.category === "Toys");
  pageTitle = "Baby's & Toys";
} else if (filter === "pets") {
  filteredProducts = products.filter((p) => p.category === "Pets");
  pageTitle = "Groceries & Pets";
} else if (filter === "medicine") {
  filteredProducts = [];
  pageTitle = "Medicine";
}

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{pageTitle}</h1>

        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;