import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface Customer {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  registeredDate: string;
}

export interface CreateCustomerDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const customerService = {
  /**
   * Lấy danh sách customer
   */
  async getAllCustomers(page = 1, limit = 10): Promise<Customer[]> {
    try {
      const response = await axiosInstance.get("/customers", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching customers:", error);
      throw error;
    }
  },

  /**
   * Lấy customer theo ID
   */
  async getCustomerById(id: string | number): Promise<Customer> {
    try {
      const response = await axiosInstance.get(`/customers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching customer with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo customer mới
   */
  async createCustomer(customerData: CreateCustomerDto): Promise<Customer> {
    try {
      const response = await axiosInstance.post("/customers", customerData);
      return response.data;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw error;
    }
  },

  /**
   * Cập nhật customer
   */
  async updateCustomer(
    id: string | number,
    customerData: Partial<CreateCustomerDto>,
  ): Promise<Customer> {
    try {
      const response = await axiosInstance.put(
        `/customers/${id}`,
        customerData,
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating customer with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa customer
   */
  async deleteCustomer(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(`/customers/${id}`);
    } catch (error) {
      console.error(`Error deleting customer with ID ${id}:`, error);
      throw error;
    }
  },
};

export default customerService;
