import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface User {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  registeredDate: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const userService = {
  /**
   * Lấy danh sách user
   */
  async getAllUsers(page = 1, limit = 10): Promise<User[]> {
    try {
      const response = await axiosInstance.get("/users", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  /**
   * Lấy user theo ID
   */
  async getUserById(id: string | number): Promise<User> {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo user mới
   */
  async createUser(userData: CreateUserDto): Promise<User> {
    try {
      const response = await axiosInstance.post("/users", userData);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  /**
   * Cập nhật user
   */
  async updateUser(
    id: string | number,
    userData: Partial<CreateUserDto>,
  ): Promise<User> {
    try {
      const response = await axiosInstance.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa user
   */
  async deleteUser(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(`/users/${id}`);
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    }
  },
};

export default userService;
