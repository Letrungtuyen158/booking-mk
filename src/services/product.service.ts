import { MediaUrl, Product } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";
import { axiosInstance } from "@/utils/axiosInstance";

export interface CreateProductDto {
  name: string;
  description: string;
  price: string;
  images?: string[];
  videos?: string[];
  category: string;
  status: string;
}

export interface ProductListRequests extends GeneralRequest {}
export interface ProductListResponse extends GeneralResponse<Product> {}

class ProductService extends BaseService<Product, CreateProductDto> {
  constructor() {
    super("/products");
  }

  /**
   * Cập nhật sản phẩm
   */
  async updateProduct(
    id: string | number,
    productData: Partial<CreateProductDto> & {
      files?: File[];
      overviews?: string[];
    },
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
      const response = await axiosInstance.put(`/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new ProductService();
