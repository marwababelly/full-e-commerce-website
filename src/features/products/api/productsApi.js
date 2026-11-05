const BASE_URL = "https://ecommerce.monzeryshop.shop/api";

const mapProductData = (item) => {
  if (!item) return null;
  const originalPrice = Number(item.price) || 0;
  const ratio = item.discount_ratio || 0;
  const currentPrice = ratio > 0 ? originalPrice - (originalPrice * (ratio / 100)) : originalPrice;
  const safeImageUrl = item.hero_image ? item.hero_image.replace(/ /g, '%20') : "";

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

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const json = await response.json();
  if (json.success && json.data) return json.data.map(mapProductData);
  return [];
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/product/${id}`);
  const json = await response.json();
  if (json.success && json.data) {
    const mappedProduct = mapProductData(json.data);
    mappedProduct.description = json.data.description;
    return mappedProduct;
  }
  return null;
};

export const getHomePageData = async () => {
  const response = await fetch(`${BASE_URL}/HomePage`);
  const json = await response.json();
  if (json.success && json.data) {
    return {
      sliders: json.data.sliders,
      categories: json.data.categories,
      flashSales: json.data.product_with_active_sales.map(mapProductData),
      bestSelling: json.data.most_reviewed_products.map(mapProductData),
      explore: json.data.latest_products.map(mapProductData),
      featured: json.data.featured_products.map(mapProductData),
    };
  }
  return null;
};