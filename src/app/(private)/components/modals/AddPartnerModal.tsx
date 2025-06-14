"use client";
import { useState, useEffect } from "react";
import FileUpload from "../common/FileUpload";
import partnerService from "@/services/partner.service";

interface AddPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (partnerData: any) => void;
  initialData?: any;
}

export default function AddPartnerModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: AddPartnerModalProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    contact: initialData?.contact || "",
    phone: initialData?.phone || "",
    status: initialData?.status || "Hoạt động",
    description: initialData?.description || "",
    overviews: initialData?.overviews ? initialData.overviews.join(", ") : "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        contact: initialData.contact || "",
        phone: initialData.phone || "",
        status: initialData.status || "Hoạt động",
        description: initialData.description || "",
        overviews: initialData.overviews
          ? initialData.overviews.join(", ")
          : "",
      });
    } else {
      setFormData({
        name: "",
        contact: "",
        phone: "",
        status: "Hoạt động",
        description: "",
        overviews: "",
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageSelect = (files: File[]) => {
    if (files.length > 0) {
      setImageFiles([files[0]]);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImagePreviews([e.target.result as string]);
        }
      };
      reader.readAsDataURL(files[0]);
    } else {
      setImageFiles([]);
      setImagePreviews([]);
    }
  };

  const removeImage = (index: number) => {
    const newImageFiles = imageFiles.filter((_, i) => i !== index);
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImageFiles(newImageFiles);
    setImagePreviews(newImagePreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Chuẩn bị dữ liệu gửi lên BE
      const submitData = {
        ...formData,
        overviews: formData.overviews
          ? formData.overviews
              .split(",")
              .map((s: string) => s.trim())
              .filter(Boolean)
          : [],
      };
      // Gửi file ảnh lên backend nếu có (chỉ 1 ảnh)
      if (imageFiles.length > 0) {
        await partnerService.updatePartner(initialData?.id, {
          ...submitData,
          files: [imageFiles[0]],
        });
      } else {
        await partnerService.updatePartner(initialData?.id, submitData);
      }
      onSave({
        ...submitData,
        id: initialData?.id || Date.now(),
        urls: imagePreviews,
        imageFiles,
      });
      setFormData({
        name: "",
        contact: "",
        phone: "",
        status: "Hoạt động",
        description: "",
        overviews: "",
      });
      setImageFiles([]);
      setImagePreviews([]);
      onClose();
    } catch (error) {
      console.error("Error saving partner:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-[800px] shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Thêm Đối tác Mới
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
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
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên đối tác *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập tên đối tác"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email liên hệ *
              </label>
              <input
                type="email"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập email liên hệ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div>
              <FileUpload
                label="Ảnh đối tác (chỉ 1 ảnh)"
                accept="image/*"
                multiple={false}
                onFileSelect={handleImageSelect}
                type={1}
              />
              {imagePreviews.length > 0 && (
                <div className="mt-3 flex gap-2">
                  <div className="relative">
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      className="h-20 w-20 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(0)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
              >
                {isLoading ? "Đang lưu..." : "Lưu"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
