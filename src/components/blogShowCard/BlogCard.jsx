import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ key, item }) => {
  return (
         <div className="flex items-center gap-12 mb-12" key={key}>
      {item.img && (
        <div className="flex-1 h-64 relative hidden md:block">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <span className="text-gray-500">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-red-500 font-medium">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className="text-lg bg-gray-400 " dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className="border-b border-red-600 w-fit">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
