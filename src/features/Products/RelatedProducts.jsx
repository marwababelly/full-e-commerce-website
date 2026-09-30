import styles from "./RelatedProducts.module.css";
// TODO: uncomment once Aya pushes ProductCard
// import ProductCard from "../../components/ProductCard";

function RelatedProducts({ products }) {
  return (
    <div className={styles.wrapper}>
      <h2>Related Items</h2>
      <div className={styles.grid}>
        {products.map((p) => (
          // TODO: replace with <ProductCard product={p} />
          <div key={p.id} className={styles.placeholder}>{p.title}</div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;