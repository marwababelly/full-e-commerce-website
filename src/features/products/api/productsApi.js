import products from "../mock/products.json";

/**
 * Simulates a network delay.
 * @param {number} ms - Milliseconds to wait.
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetches all products.
 * @returns {Promise<Array>} A promise that resolves to an array of products.
 */
export const getProducts = async () => {
  await delay(300);
  return products;
};

/**
 * Fetches a single product by its id.
 * @param {number|string} id - The product id.
 * @returns {Promise<Object|null>} The product or null if not found.
 */
export const getProductById = async (id) => {
  await delay(300);
  const product = products.find((p) => p.id === Number(id));
  return product || null;
};

/**
 * Fetches products filtered by category.
 * @param {string} category - The category name.
 * @returns {Promise<Array>} A promise that resolves to filtered products.
 */
export const getProductsByCategory = async (category) => {
  await delay(300);
  return products.filter((p) => p.category === category);
};