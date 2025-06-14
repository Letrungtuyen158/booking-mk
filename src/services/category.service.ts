import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface Category {
  id: string | number;
  name: string;
  description: string;
  productCount?: number;
  status: string;
}

export interface CreateCategoryDto {
  name: string;
  description: string;
  status: string;
}

const categoryService = {
  /**
   * Lấy danh sách category
   */
  async getAllCategories(page = 1, limit = 10): Promise<Category[]> {
    try {
      const response = await axiosInstance.get("/categories", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  /**
   * Lấy category theo ID
   */
  async getCategoryById(id: string | number): Promise<Category> {
    try {
      const response = await axiosInstance.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching category with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo category mới
   */
  async createCategory(categoryData: CreateCategoryDto): Promise<Category> {
    try {
      const response = await axiosInstance.post("/categories", categoryData);
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  },

  /**
   * Cập nhật category
   */
  async updateCategory(
    id: string | number,
    categoryData: Partial<CreateCategoryDto>,
  ): Promise<Category> {
    try {
      const response = await axiosInstance.put(
        `/categories/${id}`,
        categoryData,
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating category with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa category
   */
  async deleteCategory(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(`/categories/${id}`);
    } catch (error) {
      console.error(`Error deleting category with ID ${id}:`, error);
      throw error;
    }
  },
};

export default categoryService;
