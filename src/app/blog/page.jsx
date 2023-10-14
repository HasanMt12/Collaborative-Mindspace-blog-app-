import Menu from "@/components/blogMenu/Menu";
import BlogCardList from "@/components/blogCardList/BlogCardList";

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
   const { cat } = searchParams;

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-blue-400 ">{cat} Blog</h1>
      <div className="flex gap-12">
        <BlogCardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
