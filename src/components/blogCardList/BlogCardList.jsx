import BlogCard from "../blogShowCard/BlogCard";


const BlogCardList = () => {

  return (
    <div className="flex-[5]">
      <h1 className="my-5">Recent Posts</h1>
      <div>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default BlogCardList;
