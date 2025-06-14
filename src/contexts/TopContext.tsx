"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ProductListResponse } from "@/services/product.service";
import { CategoryListResponse } from "@/services/category.service";
import { BlogListResponse } from "@/services/blog.service";
import { PartnerListResponse } from "@/services/partner.service";

export const INITIAL_LIST = {
  list: [],
  total: 0,
  totalPages: 0,
  page: 0,
  limit: 0,
};

interface TopContextType {
  // Products
  productsList: ProductListResponse;
  setProductsList: (productsList: ProductListResponse) => void;

  // Categories
  categoriesList: CategoryListResponse;
  setCategoriesList: (categoriesList: CategoryListResponse) => void;

  // Blogs
  blogsList: BlogListResponse;
  setBlogsList: (blogsList: BlogListResponse) => void;

  // Partners
  partnersList: PartnerListResponse;
  setPartnersList: (partnersList: PartnerListResponse) => void;
}

const TopContext = createContext<TopContextType | undefined>(undefined);

export function TopProvider({
  children,
  initialProducts = INITIAL_LIST,
  initialCategories = INITIAL_LIST,
  initialBlogs = INITIAL_LIST,
  initialPartners = INITIAL_LIST,
}: {
  children: ReactNode;
  initialProducts?: ProductListResponse;
  initialCategories?: CategoryListResponse;
  initialBlogs?: BlogListResponse;
  initialPartners?: PartnerListResponse;
}) {
  const [productsList, setProductsList] =
    useState<ProductListResponse>(initialProducts);
  const [categoriesList, setCategoriesList] =
    useState<CategoryListResponse>(initialCategories);
  const [blogsList, setBlogsList] = useState<BlogListResponse>(initialBlogs);
  const [partnersList, setPartnersList] =
    useState<PartnerListResponse>(initialPartners);

  return (
    <TopContext.Provider
      value={{
        productsList,
        setProductsList,
        categoriesList,
        setCategoriesList,
        blogsList,
        setBlogsList,
        partnersList,
        setPartnersList,
      }}
    >
      {children}
    </TopContext.Provider>
  );
}

export function useTop() {
  const context = useContext(TopContext);
  if (context === undefined) {
    throw new Error("useTop must be used within a TopProvider");
  }
  return context;
}
