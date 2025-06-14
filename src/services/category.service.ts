import { Category } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";

export interface CreateCategoryDto {
  name: string;
  description: string;
  status: string;
}
export interface CategoryListRequests extends GeneralRequest {}
export interface CategoryListResponse extends GeneralResponse<Category> {}

class CategoryService extends BaseService<
  Category,
  CategoryListRequests,
  CreateCategoryDto
> {
  constructor() {
    super("/categories");
  }
}

export default new CategoryService();
