import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axiosInstance";
import { PAGE_SITE } from "@/utils/constants";
import { queryClient } from "@/app/providers";
import categoryService, {
  CategoryListRequests,
  CategoryListResponse,
  CreateCategoryDto,
} from "@/services/category.service";

export function useCategories(
  params: CategoryListRequests = {},
  options: Omit<UseQueryOptions<CategoryListResponse, Error>, "queryKey"> = {},
) {
  return useQuery<CategoryListResponse, Error>({
    queryKey: ["categories", params],
    queryFn: async () => {
      const response = await axiosInstance.get<CategoryListResponse>(
        "/categories",
        {
          params: { ...params, pageSite: PAGE_SITE },
        },
      );
      return response.data;
    },
    placeholderData: (previousData) => previousData,
    ...options,
  });
}

// Hook để lấy chi tiết danh mục
export function useCategoryDetail(id: string | number) {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => categoryService.getById(id),
    enabled: !!id, // Chỉ gọi API khi có id
  });
}
// Hook để xóa danh mục
export function useDeleteCategory() {
  return useMutation({
    mutationFn: (id: string | number) => categoryService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Error deleting category:", error);
    },
  });
}

export function useAddCategory() {
  return useMutation({
    mutationFn: (category: CreateCategoryDto) => {
      return categoryService.create(category);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Error adding category:", error);
    },
  });
}

export function useUpdateCategory() {
  return useMutation({
    mutationFn: ({
      id,
      category,
    }: {
      id: string;
      category: CreateCategoryDto;
    }) => {
      return categoryService.update(id, category);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Error updating category:", error);
    },
  });
}
