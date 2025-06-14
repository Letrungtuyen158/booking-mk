import { INITIAL_LIST } from "@/contexts/TopContext";
import Index from "@/pages/Index";
import productService from "@/services/product.service";
import categoryService from "@/services/category.service";
import blogService from "@/services/blog.service";
import partnerService from "@/services/partner.service";

async function getInitialData() {
  try {
    const [productList, categoryList, blogsList, partnersList] =
      await Promise.all([
        productService.getAll({ page: 1, limit: 4 }),
        categoryService.getAll({}),
        blogService.getAll({}),
        partnerService.getAll({}),
      ]);

    return {
      productList,
      categoryList,
      blogsList,
      partnersList,
    };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return {
      productList: INITIAL_LIST,
      categoryList: INITIAL_LIST,
      blogsList: INITIAL_LIST,
      partnersList: INITIAL_LIST,
    };
  }
}

export default async function HomePage() {
  const { productList, categoryList, blogsList, partnersList } =
    await getInitialData();

  return (
    <Index
      initialProducts={productList}
      initialCategories={categoryList}
      initialBlogs={blogsList}
      initialPartners={partnersList}
    />
  );
}
