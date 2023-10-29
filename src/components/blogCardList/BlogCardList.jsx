import { BASE_API_URL } from "@/utils/constants";
import BlogCard from "../blogShowCard/BlogCard";
import Pagination from "../pagination/Pagination";
import { FaPenFancy } from 'react-icons/fa';

const getData = async (page, cat) => {
  const res = await fetch(
    `${BASE_API_URL}/api/posts?page=${page}&cat=${cat || ""}`,
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
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
      <h1 className=" font-semibold font-merriweather">Recent Posts __ </h1><FaPenFancy />
       </div>
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
