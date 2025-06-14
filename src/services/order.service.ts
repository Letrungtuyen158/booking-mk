import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface Order {
  id: string | number;
  customerName: string;
  service: string;
  product: string;
  status: string;
  amount: string;
  date: string;
}

export interface CreateOrderDto {
  customerName: string;
  service: string;
  product: string;
  status: string;
  amount: string;
  date: string;
}

const orderService = {
  /**
   * Lấy danh sách order
   */
  async getAllOrders(page = 1, limit = 10): Promise<Order[]> {
    try {
      const response = await axiosInstance.get("/orders", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },

  /**
   * Lấy order theo ID
   */
  async getOrderById(id: string | number): Promise<Order> {
    try {
      const response = await axiosInstance.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo order mới
   */
  async createOrder(orderData: CreateOrderDto): Promise<Order> {
    try {
      const response = await axiosInstance.post("/orders", orderData);
      return response.data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  },

  /**
   * Cập nhật order
   */
  async updateOrder(
    id: string | number,
    orderData: Partial<CreateOrderDto>,
  ): Promise<Order> {
    try {
      const response = await axiosInstance.put(`/orders/${id}`, orderData);
      return response.data;
    } catch (error) {
      console.error(`Error updating order with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa order
   */
  async deleteOrder(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(`/orders/${id}`);
    } catch (error) {
      console.error(`Error deleting order with ID ${id}:`, error);
      throw error;
    }
  },
};

export default orderService;
