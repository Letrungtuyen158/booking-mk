// services/blogService.ts
import { Blog } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";

export interface CreateBlogDto {
  title: string;
  content: string;
}

export interface BlogListRequests extends GeneralRequest {}
export interface BlogListResponse extends GeneralResponse<Blog> {}

class BlogService extends BaseService<Blog, CreateBlogDto> {
  constructor() {
    super("/blogs");
  }
}

export default new BlogService();
