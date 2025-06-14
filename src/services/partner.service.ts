import { Partner } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";
import { axiosInstance } from "@/utils/axiosInstance";

export interface PartnerListRequests extends GeneralRequest {}
export interface PartnerListResponse extends GeneralResponse<Partner> {}

export interface CreatePartnerDto {
  name: string;
  contact: string;
  phone: string;
  status: string;
}

class PartnerService extends BaseService<
  Partner,
  PartnerListRequests,
  CreatePartnerDto
> {
  constructor() {
    super("/partners");
  }

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
  }
}

export default new PartnerService();
