import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
         <div className="flex items-center gap-12 mb-12">
     
        <div className="flex-1 h-64 relative hidden md:block">
          <Image src="/blogshow.jpg" alt="" fill className="object-cover" />
        </div>
    
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <span className="text-gray-500">
           20/23
          </span>
          <span className="text-red-500 font-medium">food</span>
        </div>
        <Link href={`/posts`}>
          <h1>titlelorem2wr brw5tjw wthb5h3wa5h3wa n</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className="text-lg bg-gray-400 " />
        <Link href={`/posts`} className="border-b border-red-600 w-fit">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
