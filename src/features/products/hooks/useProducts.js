import { useMemo } from "react";
import useAxiosGet from "../../../shared/Hooks/UseAxiosGet";

const mapProductData = (item) => {
  if (!item) return null;
  const originalPrice = Number(item.price) || 0;
  const ratio = item.discount_ratio || 0;
  const currentPrice = ratio > 0 ? originalPrice - (originalPrice * (ratio / 100)) : originalPrice;

  
  const safeImageUrl = item.hero_image 
    ? item.hero_image.replace(/ /g, '%20') 
    : "";

  return {
    id: item.id,
    title: item.name,
    slug: item.slug,
    price: currentPrice.toFixed(2),
    oldPrice: ratio > 0 ? originalPrice.toFixed(2) : 0,
    discountPercent: ratio,
    rating: Number(item.reviews) || 0,
    reviewsCount: item.reviews_count || 0,
    image: safeImageUrl, 
    category: item.category,
    colors: [], 
    isNew: false, 
    inStock: item.is_available === 1,
  };
};

export const useHomePage = () => {
  const { data, loading, error } = useAxiosGet("/HomePage");
  const mappedData = useMemo(() => {
    if (!data || !data.data) return null;
    return {
      sliders: data.data.sliders,
      categories: data.data.categories,
      flashSales: data.data.product_with_active_products ? data.data.product_with_active_products.map(mapProductData) : data.data.product_with_active_sales.map(mapProductData),
      bestSelling: data.data.most_reviewed_products.map(mapProductData),
      explore: data.data.latest_products.map(mapProductData),
    };
  }, [data]);

  return { data: mappedData, loading, error };
};

export const useProducts = () => {
  const { data, loading, error } = useAxiosGet("/products");
  const mappedProducts = useMemo(() => {
    if (!data || !data.data) return [];
    return data.data.map(mapProductData);
  }, [data]);
  return { products: mappedProducts, loading, error };
};