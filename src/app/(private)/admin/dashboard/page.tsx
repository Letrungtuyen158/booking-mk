"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UsersTab from "../../components/dashboard/UsersTab";
import OrdersTab from "../../components/dashboard/OrdersTab";
import ProductsTab from "../../components/dashboard/ProductsTab";
import CategoriesTab from "../../components/dashboard/CategoriesTab";
import PartnersTab from "../../components/dashboard/PartnersTab";
import BlogsTab from "../../components/dashboard/BlogsTab";

type TabType =
  | "users"
  | "orders"
  | "products"
  | "categories"
  | "blogs"
  | "partners";

interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

// Extended Mock data with more items for pagination testing
const generateMockUsers = (count: number) => {
  const users = [];
  const firstNames = [
    "Nguyễn",
    "Trần",
    "Lê",
    "Phạm",
    "Hoàng",
    "Phan",
    "Vũ",
    "Đặng",
    "Bùi",
    "Đỗ",
  ];
  const lastNames = [
    "Văn A",
    "Thị B",
    "Văn C",
    "Thị D",
    "Văn E",
    "Thị F",
    "Văn G",
    "Thị H",
    "Văn I",
    "Thị K",
  ];

  for (let i = 1; i <= count; i++) {
    users.push({
      id: i,
      name: `${firstNames[i % firstNames.length]} ${
        lastNames[i % lastNames.length]
      }`,
      email: `user${i}@gmail.com`,
      phone: `090${Math.floor(1000000 + Math.random() * 9000000)}`,
      registeredDate: `2024-${String(
        Math.floor(Math.random() * 12) + 1,
      ).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(
        2,
        "0",
      )}`,
    });
  }
  return users;
};

const generateMockOrders = (count: number) => {
  const orders = [];
  const services = [
    "Tour Hà Nội",
    "Tour Đà Nẵng",
    "Tour Sapa",
    "Tour Phú Quốc",
    "Tour Hội An",
    "Tour Nha Trang",
  ];
  const products = ["Tour 2N1Đ", "Tour 3N2Đ", "Tour 4N3Đ", "Tour 5N4Đ"];
  const statuses = ["Đã thanh toán", "Chờ thanh toán", "Đã hủy"];

  for (let i = 1; i <= count; i++) {
    orders.push({
      id: `ORD${String(i).padStart(3, "0")}`,
      customerName: `Khách hàng ${i}`,
      service: services[i % services.length],
      product: products[i % products.length],
      status: statuses[i % statuses.length],
      amount: `${(
        Math.floor(Math.random() * 4000000) + 1000000
      ).toLocaleString()} VND`,
      date: `2024-06-${String(Math.floor(Math.random() * 30) + 1).padStart(
        2,
        "0",
      )}`,
    });
  }
  return orders;
};

const generateMockProducts = (count: number) => {
  const products = [];
  const locations = [
    "Hà Nội",
    "Đà Nẵng",
    "Sapa",
    "Phú Quốc",
    "Hội An",
    "Nha Trang",
    "Hạ Long",
    "Đà Lạt",
  ];
  const categories = [
    "Tour trong nước",
    "Tour nước ngoài",
    "Tour phiêu lưu",
    "Tour nghỉ dưỡng",
  ];

  // Sample image URLs (in real app, these would be from your image storage)
  const sampleImages = [
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
  ];

  // Sample video URLs (in real app, these would be from your video storage)
  const sampleVideos = [
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
  ];

  for (let i = 1; i <= count; i++) {
    const location = locations[i % locations.length];
    const days = Math.floor(Math.random() * 5) + 2;

    // Randomly assign 1-3 images
    const imageCount = Math.floor(Math.random() * 3) + 1;
    const productImages = [];
    for (let j = 0; j < imageCount; j++) {
      productImages.push(sampleImages[j % sampleImages.length]);
    }

    // Randomly assign 0-2 videos (some products may not have videos)
    const videoCount =
      Math.random() > 0.6 ? Math.floor(Math.random() * 2) + 1 : 0;
    const productVideos = [];
    for (let j = 0; j < videoCount; j++) {
      productVideos.push(sampleVideos[j % sampleVideos.length]);
    }

    products.push({
      id: i,
      name: `Tour ${location} ${days}N${days - 1}Đ`,
      description: `Khám phá ${location} với ${days} ngày ${
        days - 1
      } đêm tuyệt vời`,
      price: `${(
        Math.floor(Math.random() * 4000000) + 1000000
      ).toLocaleString()} VND`,
      images: productImages,
      videos: productVideos.length > 0 ? productVideos : undefined,
      category: categories[i % categories.length],
      status: Math.random() > 0.2 ? "Hoạt động" : "Tạm dừng",
    });
  }
  return products;
};

const generateMockCategories = (count: number) => {
  const categories = [];
  const categoryNames = [
    "Tour trong nước",
    "Tour nước ngoài",
    "Tour phiêu lưu",
    "Tour nghỉ dưỡng",
    "Tour văn hóa",
    "Tour ẩm thực",
    "Tour team building",
    "Tour honeymoon",
    "Tour cao cấp",
    "Tour tiết kiệm",
    "Tour gia đình",
    "Tour khám phá",
  ];

  for (let i = 1; i <= count; i++) {
    categories.push({
      id: i,
      name: categoryNames[i % categoryNames.length],
      description: `Mô tả cho ${categoryNames[i % categoryNames.length]}`,
      productCount: Math.floor(Math.random() * 50) + 5,
      status: Math.random() > 0.1 ? "Hoạt động" : "Tạm dừng",
    });
  }
  return categories;
};

const generateMockBlogs = (count: number) => {
  const blogs = [];
  for (let i = 1; i <= count; i++) {
    blogs.push({
      id: i,
      title: `Blog số ${i}`,
      author: `Tác giả ${i}`,
      createdAt: `2024-06-${String(Math.floor(Math.random() * 30) + 1).padStart(
        2,
        "0",
      )}`,
      status: Math.random() > 0.2 ? "Công khai" : "Nháp",
    });
  }
  return blogs;
};

const generateMockPartners = (count: number) => {
  const partners = [];
  for (let i = 1; i <= count; i++) {
    partners.push({
      id: i,
      name: `Đối tác ${i}`,
      contact: `contact${i}@partner.com`,
      phone: `09${Math.floor(10000000 + Math.random() * 90000000)}`,
      status: Math.random() > 0.2 ? "Hoạt động" : "Tạm dừng",
    });
  }
  return partners;
};

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<TabType>("users");
  const [mockUsers, setMockUsers] = useState(() => generateMockUsers(87));
  const [mockOrders, setMockOrders] = useState(() => generateMockOrders(123));
  const [mockProducts, setMockProducts] = useState(() =>
    generateMockProducts(156),
  );
  const [mockCategories, setMockCategories] = useState(() =>
    generateMockCategories(24),
  );
  const [mockBlogs, setMockBlogs] = useState(() => generateMockBlogs(32));
  const [mockPartners, setMockPartners] = useState(() =>
    generateMockPartners(15),
  );

  const [pagination, setPagination] = useState<
    Record<TabType, PaginationState>
  >({
    users: { page: 1, limit: 10, total: 87 },
    orders: { page: 1, limit: 10, total: 123 },
    products: { page: 1, limit: 10, total: 156 },
    categories: { page: 1, limit: 10, total: 24 },
    blogs: { page: 1, limit: 10, total: 32 },
    partners: { page: 1, limit: 10, total: 15 },
  });

  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    // Set dummy user data
    setUser({ name: "Admin User", email: "admin@bookingmk.com" });
  }, [router]);

  // Update pagination totals when data changes
  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      users: { ...prev.users, total: mockUsers.length },
      orders: { ...prev.orders, total: mockOrders.length },
      products: { ...prev.products, total: mockProducts.length },
      categories: { ...prev.categories, total: mockCategories.length },
      blogs: { ...prev.blogs, total: mockBlogs.length },
      partners: { ...prev.partners, total: mockPartners.length },
    }));
  }, [
    mockUsers.length,
    mockOrders.length,
    mockProducts.length,
    mockCategories.length,
    mockBlogs.length,
    mockPartners.length,
  ]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  const handlePageChange = (tab: TabType, newPage: number) => {
    setPagination((prev) => ({
      ...prev,
      [tab]: { ...prev[tab], page: newPage },
    }));
  };

  const handleLimitChange = (tab: TabType, newLimit: number) => {
    setPagination((prev) => ({
      ...prev,
      [tab]: { ...prev[tab], limit: newLimit, page: 1 },
    }));
  };

  const getPaginatedData = (data: any[], tab: TabType) => {
    const { page, limit } = pagination[tab];
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
  };

  // Add new item handlers
  const handleAddUser = (userData: any) => {
    setMockUsers((prev) => [userData, ...prev]);
    console.log("Added user:", userData);
  };

  const handleDeleteUser = (id: number) => {
    setMockUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleAddOrder = (orderData: any) => {
    setMockOrders((prev) => [orderData, ...prev]);
    console.log("Added order:", orderData);
  };

  const handleAddProduct = (productData: any) => {
    setMockProducts((prev) => [productData, ...prev]);
    console.log("Added product:", productData);
  };

  const handleDeleteProduct = (id: number) => {
    setMockProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleAddCategory = (categoryData: any) => {
    setMockCategories((prev) => [categoryData, ...prev]);
    console.log("Added category:", categoryData);
  };

  const handleDeleteCategory = (id: number) => {
    setMockCategories((prev) => prev.filter((category) => category.id !== id));
  };

  const handleAddBlog = (blogData: any) => {
    setMockBlogs((prev) => [blogData, ...prev]);
    console.log("Added blog:", blogData);
  };

  const handleDeleteBlog = (id: number) => {
    setMockBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  const handleAddPartner = (partnerData: any) => {
    setMockPartners((prev) => [partnerData, ...prev]);
    console.log("Added partner:", partnerData);
  };

  const handleDeletePartner = (id: number) => {
    setMockPartners((prev) => prev.filter((partner) => partner.id !== id));
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const tabs = [
    { id: "users", name: "Quản lí Customers", icon: "👥" },
    { id: "orders", name: "Quản lí Order", icon: "📋" },
    { id: "products", name: "Quản lí Sản phẩm", icon: "🏷️" },
    { id: "categories", name: "Quản lí Category", icon: "📁" },
    { id: "blogs", name: "Quản lí Blogs", icon: "📝" },
    { id: "partners", name: "Quản lí Partner", icon: "🤝" },
  ];

  const renderTabContent = () => {
    const usersPagination = pagination.users;
    const ordersPagination = pagination.orders;
    const productsPagination = pagination.products;
    const categoriesPagination = pagination.categories;
    const blogsPagination = pagination.blogs;
    const partnersPagination = pagination.partners;

    switch (activeTab) {
      case "users":
        return (
          <UsersTab
            users={getPaginatedData(mockUsers, "users")}
            page={usersPagination.page}
            limit={usersPagination.limit}
            total={usersPagination.total}
            onPageChange={(page) => handlePageChange("users", page)}
            onLimitChange={(limit) => handleLimitChange("users", limit)}
            onAddUser={handleAddUser}
            onDeleteUser={handleDeleteUser}
          />
        );
      case "orders":
        return (
          <OrdersTab
            orders={getPaginatedData(mockOrders, "orders")}
            page={ordersPagination.page}
            limit={ordersPagination.limit}
            total={ordersPagination.total}
            onPageChange={(page) => handlePageChange("orders", page)}
            onLimitChange={(limit) => handleLimitChange("orders", limit)}
            onAddOrder={handleAddOrder}
          />
        );
      case "products":
        return (
          <ProductsTab
            products={getPaginatedData(mockProducts, "products")}
            page={productsPagination.page}
            limit={productsPagination.limit}
            total={productsPagination.total}
            onPageChange={(page) => handlePageChange("products", page)}
            onLimitChange={(limit) => handleLimitChange("products", limit)}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        );
      case "categories":
        return (
          <CategoriesTab
            categories={getPaginatedData(mockCategories, "categories")}
            page={categoriesPagination.page}
            limit={categoriesPagination.limit}
            total={categoriesPagination.total}
            onPageChange={(page) => handlePageChange("categories", page)}
            onLimitChange={(limit) => handleLimitChange("categories", limit)}
            onAddCategory={handleAddCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        );
      case "blogs":
        return (
          <BlogsTab
            blogs={getPaginatedData(mockBlogs, "blogs")}
            page={blogsPagination.page}
            limit={blogsPagination.limit}
            total={blogsPagination.total}
            onPageChange={(page) => handlePageChange("blogs", page)}
            onLimitChange={(limit) => handleLimitChange("blogs", limit)}
            onAddBlog={handleAddBlog}
            onDeleteBlog={handleDeleteBlog}
          />
        );
      case "partners":
        return (
          <PartnersTab
            partners={getPaginatedData(mockPartners, "partners")}
            page={partnersPagination.page}
            limit={partnersPagination.limit}
            total={partnersPagination.total}
            onPageChange={(page) => handlePageChange("partners", page)}
            onLimitChange={(limit) => handleLimitChange("partners", limit)}
            onAddPartner={handleAddPartner}
            onDeletePartner={handleDeletePartner}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">{renderTabContent()}</div>
      </div>
    </div>
  );
}
