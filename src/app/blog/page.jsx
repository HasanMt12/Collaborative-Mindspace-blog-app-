import Menu from "@/components/blogMenu/Menu";
import BlogCardList from "@/components/blogCardList/BlogCardList";
import { FaPenFancy } from 'react-icons/fa';

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
   const { cat } = searchParams;

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center gap-2 text-sky-600 mb-5 mt-8 p-2 bg-sky-200 rounded-sm">
          <h1 className=" font-semibold font-merriweather">{cat} Blog __ </h1><FaPenFancy />
       </div>
      <div className="flex gap-12">
        <BlogCardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
