"use client";
import { useState, useRef } from "react";

interface FileUploadProps {
  label: string;
  accept: string;
  multiple?: boolean;
  onFileSelect: (files: File[]) => void;
  preview?: string;
  type: "image" | "video";
}

export default function FileUpload({
  label,
  accept,
  multiple = false,
  onFileSelect,
  preview,
  type,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      onFileSelect(files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files);
      onFileSelect(files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Preview */}
      {preview && (
        <div className="mb-3">
          {type === "image" ? (
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg border border-gray-300"
            />
          ) : (
            <video
              src={preview}
              className="h-32 w-48 object-cover rounded-lg border border-gray-300"
              controls
            />
          )}
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 ${
          dragActive
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />

        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-4">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
              onClick={onButtonClick}
            >
              Upload {type === "image" ? "hình ảnh" : "video"}
            </button>
            <p className="text-gray-500">hoặc kéo thả file vào đây</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {type === "image"
              ? "PNG, JPG, GIF up to 10MB"
              : "MP4, MOV, AVI up to 100MB"}
          </p>
        </div>
      </div>
    </div>
  );
}
