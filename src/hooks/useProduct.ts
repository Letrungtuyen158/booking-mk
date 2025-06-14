import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import productService, {
  CreateProductDto,
  ProductListRequests,
  ProductListResponse,
} from "@/services/product.service";
import { axiosInstance } from "@/utils/axiosInstance";
import { PAGE_SITE } from "@/utils/constants";
import { toast } from "sonner";
import { queryClient } from "@/app/providers";
import { Product } from "@/types/api";

export function useProducts(
  params: ProductListRequests = {},
  options: Omit<UseQueryOptions<ProductListResponse, Error>, "queryKey"> = {},
) {
  return useQuery<ProductListResponse, Error>({
    queryKey: ["products", params],
    queryFn: async () => {
      const response = await axiosInstance.get<ProductListResponse>(
        "/products",
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

// Hook để lấy chi tiết sản phẩm
export function useProductDetail(id: string | number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getById(id),
    enabled: !!id, // Chỉ gọi API khi có id
  });
}
// Hook để xóa sản phẩm
export function useDeleteProduct() {
  return useMutation({
    mutationFn: (id: string | number) => productService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });
}

export function useAddProduct() {
  return useMutation({
    mutationFn: (product: CreateProductDto) => productService.create(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
  });
}

export function useUpdateProduct() {
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateProductDto>;
    }) => productService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error updating product:", error);
    },
  });
}
