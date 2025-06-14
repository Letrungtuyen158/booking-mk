"use client";
import { useState } from "react";
import PaginationControls from "./PaginationControls";
import AddProductModal from "../modals/AddProductModal";
import { MediaType, Product, StatusType } from "@/types/api";
import { getMediaContents } from "@/utils/getMediaContent";

interface ProductsTabProps {
  products: Product[];
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  onAddProduct: (productData: any) => void;
  onDeleteProduct: (id: string) => void;
}

export default function ProductsTab({
  products,
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
  onAddProduct,
  onDeleteProduct,
}: ProductsTabProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    url: string;
  } | null>(null);

  const openMediaPreview = (type: "image" | "video", url: string) => {
    setSelectedMedia({ type, url });
  };

  const closeMediaPreview = () => {
    setSelectedMedia(null);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setEditingProduct(null);
  };

  const handleSave = (productData: any) => {
    if (editingProduct) {
      // Sửa product
      onAddProduct({ ...editingProduct, ...productData });
    } else {
      // Thêm mới
      onAddProduct(productData);
    }
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      onDeleteProduct(id);
    }
  };

  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Danh sách Sản phẩm
            </h3>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Thêm sản phẩm
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hình ảnh
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Video
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mô tả
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Danh mục
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.id}
                    </td>

                    {/* Images Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-1">
                        {(() => {
                          const images = getMediaContents(
                            product.urls,
                            MediaType.IMAGE,
                          );
                          if (images.length === 0)
                            <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center">
                              <span className="text-xs text-gray-500">
                                No image
                              </span>
                            </div>;

                          return (
                            <>
                              <img
                                src={images[0]}
                                alt="Product"
                                className="h-12 w-12 object-cover rounded cursor-pointer hover:opacity-80"
                                onClick={() =>
                                  openMediaPreview("image", images[0])
                                }
                              />
                              ;
                              {images.length > 1 && (
                                <div className="h-12 w-8 bg-gray-200 rounded flex items-center justify-center">
                                  <span className="text-xs text-gray-600">
                                    +{images.length - 1}
                                  </span>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </td>

                    {/* Videos Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-1">
                        {(() => {
                          const videos = getMediaContents(
                            product.urls,
                            MediaType.VIDEO,
                          );
                          if (videos.length === 0)
                            return (
                              <div className="h-12 w-16 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-500">
                                  No video
                                </span>
                              </div>
                            );
                          return (
                            <>
                              <div className="relative">
                                <video
                                  src={videos[0]}
                                  className="h-12 w-16 object-cover rounded cursor-pointer hover:opacity-80"
                                  onClick={() =>
                                    openMediaPreview("video", videos[0])
                                  }
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                              {videos.length > 1 && (
                                <div className="h-12 w-8 bg-gray-200 rounded flex items-center justify-center">
                                  <span className="text-xs text-gray-600">
                                    +{videos.length - 1}
                                  </span>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {product.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === StatusType.ACTIVE
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status === StatusType.ACTIVE
                          ? "Hoạt động"
                          : "Tạm dừng"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                        onClick={() => handleEdit(product)}
                      >
                        Sửa
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(product.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <PaginationControls
          page={page}
          limit={limit}
          total={total}
          onPageChange={onPageChange}
          onLimitChange={onLimitChange}
        />
      </div>

      {/* Media Preview Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeMediaPreview}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.url}
                alt="Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.url}
                className="max-w-full max-h-full object-contain rounded-lg"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        initialData={editingProduct}
      />
    </>
  );
}
