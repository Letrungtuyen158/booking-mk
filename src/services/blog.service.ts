// services/blogService.ts
import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBlogDto {
  title: string;
  content: string;
}

// Service gọi trực tiếp đến backend
const blogService = {
  /**
   * Lấy danh sách blog
   */
  async getAllBlogs(page = 1, limit = 10): Promise<Blog[]> {
    // Sử dụng axios instance có xác thực nếu cần
    try {
      // Gọi trực tiếp đến backend thực sự
      // Lưu ý: Đây là URL đầy đủ khi chạy trên server
      const response = await axiosInstance.get("/posts", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  /**
   * Lấy blog theo ID
   */
  async getBlogById(id: string): Promise<Blog> {
    try {
      const response = await axiosInstance.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blog with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo blog mới
   */
  async createBlog(blogData: CreateBlogDto): Promise<Blog> {
    try {
      const response = await axiosInstance.post("/blogs", blogData);
      return response.data;
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  },

  /**
   * Cập nhật blog
   */
  async updateBlog(
    id: string,
    blogData: Partial<CreateBlogDto>,
  ): Promise<Blog> {
    try {
      const response = await axiosInstance.put(`/blogs/${id}`, blogData);
      return response.data;
    } catch (error) {
      console.error(`Error updating blog with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa blog
   */
  async deleteBlog(id: string): Promise<void> {
    try {
      await axiosInstance.delete(`/blogs/${id}`);
    } catch (error) {
      console.error(`Error deleting blog with ID ${id}:`, error);
      throw error;
    }
  },
};

export default blogService;
