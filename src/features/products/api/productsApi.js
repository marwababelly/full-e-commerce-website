import { Axios } from "../../../Hooks/Axios";

export const getProducts = async () => {
  try {
    const response = await Axios.get("products");
    const resData = response.data;

    let productsArray = [];
    if (resData && resData.data) {
      productsArray = Array.isArray(resData.data) ? resData.data : resData.data.data || [];
    } else if (Array.isArray(resData)) {
      productsArray = resData;
    }

    const imagesList = [
      "/images/products/gamepad.jpg",
      "/images/products/keyboard.jpg",
      "/images/products/headphones.jpg",
      "/images/products/smartwatch.jpg",
      "/images/products/gamepad1.jpg",
      "/images/products/gamepad2.jpg",
      "/images/products/gamepad3.jpg",
      "/images/products/gamepad4.jpg"
    ];

    return productsArray.map((product, index) => {
      const localImage = imagesList[index % imagesList.length];
      
      return {
        ...product,
        image: product.image || product.image_url || localImage,
        title: product.name || product.title || "Product",
        id: product.id || index + 1,
      };
    });
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await Axios.get(`product/${id}`);
    const resData = response.data;
    let product = resData && resData.data ? resData.data : resData;

    if (product) {
      const imagesList = [
        "/images/products/gamepad.jpg",
        "/images/products/keyboard.jpg",
        "/images/products/headphones.jpg",
        "/images/products/smartwatch.jpg",
        "/images/products/gamepad1.jpg",
        "/images/products/gamepad2.jpg",
        "/images/products/gamepad3.jpg",
        "/images/products/gamepad4.jpg"
      ];
      
      const localImage = imagesList[(Number(id) - 1) % imagesList.length] || "/images/products/gamepad.jpg";

      return {
        ...product,
        image: product.image || product.image_url || localImage,
        title: product.name || product.title || "Product",
        id: product.id || Number(id),
      };
    }
    return null;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};