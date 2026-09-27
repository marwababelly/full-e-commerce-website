import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";

/**
 * Custom hook to fetch all products.
 * Handles loading and error states.
 * @returns {{ products: Array, loading: boolean, error: Error|null }}
 */
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  console.log("useEffect ran");
  let isMounted = true;

  const fetchProducts = async () => {
    console.log("fetchProducts start");
    try {
      setLoading(true);
      const data = await getProducts();
      console.log("data received:", data);
      if (isMounted) {
        setProducts(data);
        setError(null);
      }
    } catch (err) {
      console.log("error:", err);
      if (isMounted) setError(err);
    } finally {
      console.log("finally, isMounted =", isMounted);
      if (isMounted) setLoading(false);
    }
  };

  fetchProducts();

  return () => {
    console.log("cleanup ran");
    isMounted = false;
  };
}, []);

  return { products, loading, error };
};