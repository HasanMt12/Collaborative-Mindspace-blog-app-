import BlogCard from "../blogShowCard/BlogCard";
import Pagination from "../pagination/Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const BlogCardList = async ({ page, cat }) => {
 const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
     <div className="flex-[5]">
      <h1 className="my-5">Recent Posts</h1>
      <div>
        {posts?.map((item) => (
          <BlogCard item={item} key={item._id} />
        ))}
      </div>
     <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default BlogCardList;
