import { Category, StatusType } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";

export interface CreateCategoryDto {
  name: string;
  description: string;
  status: StatusType;
}
export interface CategoryListRequests extends GeneralRequest {}
export interface CategoryListResponse extends GeneralResponse<Category> {}

class CategoryService extends BaseService<Category, CreateCategoryDto> {
  constructor() {
    super("/categories");
  }
}

export default new CategoryService();
