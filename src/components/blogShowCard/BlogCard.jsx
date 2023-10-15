'use client'
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from 'react-icons/ai';
const BlogCard = ({ key, item }) => {
    const { theme } = useTheme();
  return (
         <div className={`flex items-start gap-8 mb-12 p-1 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1E1E1E]'} `} key={key}>
      {item.img && (
        <div className="flex-1 h-64 relative hidden md:block">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-500">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-cyan-600 font-medium">{item.catSlug}</span>
        </div>
        <div> 
           <div>
            <span className="text-gray-500">
              views
            </span>
            <span className="text-cyan-600 font-medium">{item.views}</span>
          </div><AiOutlineEye />
        </div>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="text-[#0E7490] font-semibold lg:text-lg md:text-md text-sm">{item.title}</h1>
        </Link>

        <div className="lg:text-md md:text-sm text-xs " dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,180) }}/>
        <Link href={`/posts/${item.slug}`} className="border-b border-red-600 w-fit">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
