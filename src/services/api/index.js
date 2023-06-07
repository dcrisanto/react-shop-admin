const API_BASE = process.env.NEXT_PUBLIC_API_URL_BASE;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API_BASE}/api/${API_VERSION}/auth/login`,
    profile: `${API_BASE}/api/${API_VERSION}/auth/profile`,
    token: `${API_BASE}/api/${API_VERSION}/auth/refresh-token`
  },
  products: {
    getProduct: (id) => `${API_BASE}/api/${API_VERSION}/product/${id}`,
    getProducts: (limit, offset) => `${API_BASE}/api/${API_VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API_BASE}/api/${API_VERSION}/products`,
    updateProduct: (id) => `${API_BASE}/api/${API_VERSION}/products/${id}`,
    delteProduct: (id) => `${API_BASE}/api/${API_VERSION}/products/${id}` 
  },
  categories: {
    getCategory: (id) => `${API_BASE}/api/${API_VERSION}/categories/${id}`,
    getCategories: (limit) => `${API_BASE}/api/${API_VERSION}/categories?limit=${limit}`,
    addProducts: `${API_BASE}/api/${API_VERSION}/categories`,
    updateCategory: (id) =>  `${API_BASE}/api/${API_VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API_BASE}/api/${API_VERSION}/categories/${id}`,
    getProductsForCategory: (id) => `${API_BASE}/api/${API_VERSION}/categories/${id}`
  },
  files: {
    getFile: (filename) => `${API_BASE}/api/${API_VERSION}/files/${filename}`,
    addFile: `${API_BASE}/api/${API_VERSION}/files/upload`
  }
};

export default endPoints;
