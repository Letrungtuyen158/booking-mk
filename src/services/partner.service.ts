import { axiosInstance } from "@/utils/axiosInstance";

// Types
export interface Partner {
  id: string | number;
  name: string;
  contact: string;
  phone: string;
  status: string;
}

export interface CreatePartnerDto {
  name: string;
  contact: string;
  phone: string;
  status: string;
}

const partnerService = {
  /**
   * Lấy danh sách partner
   */
  async getAllPartners(page = 1, limit = 10): Promise<Partner[]> {
    try {
      const response = await axiosInstance.get("/partners", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching partners:", error);
      throw error;
    }
  },

  /**
   * Lấy partner theo ID
   */
  async getPartnerById(id: string | number): Promise<Partner> {
    try {
      const response = await axiosInstance.get(`/partners/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching partner with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Tạo partner mới
   */
  async createPartner(partnerData: CreatePartnerDto): Promise<Partner> {
    try {
      const response = await axiosInstance.post("/partners", partnerData);
      return response.data;
    } catch (error) {
      console.error("Error creating partner:", error);
      throw error;
    }
  },

  /**
   * Cập nhật partner
   */
  async updatePartner(
    id: string | number,
    partnerData: Partial<CreatePartnerDto> & {
      files?: File[];
      overviews?: string[];
      description?: string;
    },
  ): Promise<Partner> {
    try {
      const formData = new FormData();
      Object.entries(partnerData).forEach(([key, value]) => {
        if (key !== "files" && value !== undefined) {
          if (key === "overviews" && Array.isArray(value)) {
            value.forEach((item) => formData.append("overviews", item));
          } else {
            formData.append(key, value as string);
          }
        }
      });
      if (partnerData.files) {
        partnerData.files.forEach((file) => {
          formData.append("urls", file);
        });
      }
      const response = await axiosInstance.put(`/partners/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating partner with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Xóa partner
   */
  async deletePartner(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(`/partners/${id}`);
    } catch (error) {
      console.error(`Error deleting partner with ID ${id}:`, error);
      throw error;
    }
  },
};

export default partnerService;
