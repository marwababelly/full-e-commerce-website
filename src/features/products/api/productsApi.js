import { Axios } from "../../../Hooks/Axios"; // تأكدي من المسار (Hooks أو hooks)

const localImages = [
  "/images/products/gamepad.jpg",
  "/images/products/keyboard.jpg",
  "/images/products/headphones.jpg",
  "/images/products/smartwatch.jpg",
  "/images/products/gamepad1.jpg",
  "/images/products/gamepad2.jpg",
];

export const getProducts = async () => {
  // الربط الحقيقي مع الـ API
  const response = await Axios.get("https://fakestoreapi.com/products");
  
  return response.data.map((product, index) => {
    return {
      ...product,
      image: localImages[index % localImages.length], // نستخدم صورك المحلية عشان تظهر
      oldPrice: Math.round(product.price + 50),
      discountPercent: (index % 3) * 10,
      colors: ["#000000", "#db4444"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      reviewsCount: product.rating?.count || 50,
    };
  });
};

export const getProductById = async (id) => {
  const response = await Axios.get(`https://fakestoreapi.com/products/${id}`);
  const product = response.data;
  
  return {
    ...product,
    image: localImages[(id - 1) % localImages.length],
    oldPrice: Math.round(product.price + 50),
    colors: ["#000000", "#db4444"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    reviewsCount: product.rating?.count || 50,
  };
};

export const getProductsByCategory = async (category) => {
  const response = await Axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response.data;
};