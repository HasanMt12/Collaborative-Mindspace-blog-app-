import Menu from "@/components/blogMenu/Menu";
import BlogCardList from "@/components/blogCardList/BlogCardList";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-blue-400 "> Blog</h1>
      <div className="flex gap-12">
        <BlogCardList/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
