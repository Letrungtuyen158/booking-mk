import { axiosInstance } from "@/utils/axiosInstance";
import { BaseEntity } from "@/types/api";
import { GeneralRequest, GeneralResponse } from "./type";
import { PAGE_SITE } from "@/utils/constants";

export class BaseService<
  T extends BaseEntity,
  CreateDto = any,
  UpdateDto = Partial<CreateDto>,
> {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  protected getUrl(id?: string | number): string {
    return id ? `${this.endpoint}/${id}` : this.endpoint;
  }

  /**
   * Lấy danh sách
   */
  async getAll({
    pageSite = PAGE_SITE,
    ...params
  }: GeneralRequest): Promise<GeneralResponse<T>> {
    try {
      const response = await axiosInstance.get(this.getUrl(), {
        params: { ...params, pageSite },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${this.endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Lấy theo ID
   */
  async getById(id: string | number): Promise<T> {
    try {
      const response = await axiosInstance.get(this.getUrl(id));
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${this.endpoint} with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * Tạo mới
   */
  async create(data: CreateDto): Promise<T> {
    try {
      const response = await axiosInstance.post(this.getUrl(), data);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${this.endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Cập nhật
   */
  async update(id: string | number, data: UpdateDto): Promise<T> {
    try {
      const response = await axiosInstance.put(this.getUrl(id), data);
      return response.data;
    } catch (error) {
      console.error(`Error updating ${this.endpoint} with ID ${id}:`, error);
      throw error;
    }
  }

  /**
   * Xóa
   */
  async delete(id: string | number): Promise<void> {
    try {
      await axiosInstance.delete(this.getUrl(id));
    } catch (error) {
      console.error(`Error deleting ${this.endpoint} with ID ${id}:`, error);
      throw error;
    }
  }
}
