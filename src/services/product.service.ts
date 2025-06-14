import { MediaUrl, Product, StatusType } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";
import { axiosInstance } from "@/utils/axiosInstance";
import { PAGE_SITE } from "@/utils/constants";

export interface CreateProductDto {
  name: string;
  overviews: string[];
  description: string;
  price: string;
  status: StatusType;
  category?: string;
  files?: File[];
}

export interface ProductListRequests extends GeneralRequest {}
export interface ProductListResponse extends GeneralResponse<Product> {}

class ProductService extends BaseService<Product, CreateProductDto> {
  constructor() {
    super("/products");
  }
  /**
   * Tạo sản phẩm
   */
  async create(productData: CreateProductDto): Promise<Product> {
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        if (key !== "files" && value !== undefined) {
          if (key === "overviews" && Array.isArray(value)) {
            value.forEach((item) => formData.append("overviews", item));
          } else {
            formData.append(key, value as string);
          }
        }
      });
      if (productData.files) {
        productData.files.forEach((file) => {
          formData.append("urls", file);
        });
      }

      formData.append("pageSite", `${PAGE_SITE}`);

      const response = await axiosInstance.post(`/products`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error(`Error creating product:`, error);
      throw error;
    }
  }

  /**
   * Cập nhật sản phẩm
   */
  async update(
    id: string | number,
    productData: Partial<CreateProductDto>,
  ): Promise<Product> {
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        if (key !== "files" && value !== undefined) {
          if (key === "overviews" && Array.isArray(value)) {
            value.forEach((item) => formData.append("overviews", item));
          } else {
            formData.append(key, value as string);
          }
        }
      });
      if (productData.files) {
        productData.files.forEach((file) => {
          formData.append("urls", file);
        });
      }
      const response = await axiosInstance.put(
        `/products/update/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new ProductService();
