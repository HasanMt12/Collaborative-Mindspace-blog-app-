
import Link from "next/link";
import Image from "next/image";

const CategoryItems = () => {

  return (
    <div className="">
      <h1 className="">Popular Categories</h1>
       <div className="grid lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-3 grid-cols-3 gap-1">
         
        <Link
            href="/blog"
            className={`flex justify-center lg:gap-4 md:gap-3 gap-1 items-center lg:h-20 md:h-16 h-14 rounded-lg lg:text-lg md:text-md text-xs  bg-sky-200 `}
          >
              <Image
                src="/fashion.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg"
              />
            Fashion
          </Link>
          <Link
            href="/blog"
            className={`flex justify-center lg:gap-4 md:gap-3 gap-1 items-center lg:h-20 md:h-16 h-14 rounded-lg lg:text-lg md:text-md text-xs  bg-sky-200 `}
          >
              <Image
                src="/food.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg"
              />
            food
          </Link>
          <Link
            href="/blog"
            className={`flex justify-center lg:gap-4 md:gap-3 gap-1 items-center lg:h-20 md:h-16 h-14 rounded-lg lg:text-lg md:text-md text-xs  bg-sky-200 `}
          >
              <Image
                src="/fashion.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg"
              />
            Fashion
          </Link>
          <Link
            href="/blog"
            className={`flex justify-center lg:gap-4 md:gap-3 gap-1 items-center lg:h-20 md:h-16 h-14 rounded-lg lg:text-lg md:text-md text-xs  bg-sky-200`}
          >
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg"
              />
            style
          </Link>
          <Link
            href="/blog"
            className={`flex justify-center lg:gap-4 md:gap-3 gap-1 items-center lg:h-20 md:h-16 h-14 rounded-lg lg:text-lg md:text-md text-xs  bg-sky-200 `}
          >
              <Image
                src="/food.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg "
              />
            food
          </Link>
      </div>
    </div>
  );
};

export default CategoryItems;
