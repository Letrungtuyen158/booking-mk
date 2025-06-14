import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import productService, {
  ProductListRequests,
  ProductListResponse,
} from "@/services/product.service";
import { axiosInstance } from "@/utils/axiosInstance";
import { PAGE_SITE } from "@/utils/constants";

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
