import Blog from "@/pages/Blog";

export const metadata = {
  title: "Travel Blog - Booking MK",
  description: "Share travel tips, experiences, and stories with Booking MK.",
};

export default async function BlogPage() {
  // const blogs: BlogPost[] = await blogService.getAllBlogs();

  // console.log(blogs);

  return <Blog />;
}
