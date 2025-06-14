import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: string;
  images?: string[];
  videos?: string[];
  category: string;
  status: string;
}

export interface CreateProductDto {
  name: string;
  description: string;
  price: string;
  images?: string[];
  videos?: string[];
  category: string;
  status: string;
}

const productService = {
  /**
   * Lấy danh sách sản phẩm
   */
  async getAllProducts(page = 1, limit = 10): Promise<Product[]> {
    try {
      const response = await axiosInstance.get("/products", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  /**
   * Lấy sản phẩm theo ID
   */
  async getProductById(id: string | number): Promise<Product> {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo sản phẩm mới
   */
  async createProduct(productData: CreateProductDto): Promise<Product> {
    try {
      const response = await axiosInstance.post("/products", productData);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  /**
   * Cập nhật sản phẩm
   */
  async updateProduct(
    id: string | number,
    productData: Partial<CreateProductDto>,
  ): Promise<Product> {
    try {
      const response = await axiosInstance.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa sản phẩm
   */
  async deleteProduct(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(`/products/${id}`);
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
      throw error;
    }
  },
};

export default productService;
