
import Link from "next/link";
import { FaPenFancy } from 'react-icons/fa';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const CategoryItems = async () => {
 const data = await getData();
  return (
    <div className="">
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-4">
      <h1 className=" font-semibold font-merriweather">Popular Categories __ </h1><FaPenFancy />
       </div>
       <div className="grid lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-3 grid-cols-3 gap-1">
         
      {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}  title={`${item.title} blogs`}
            className={`flex justify-center lg:gap-4 md:gap-3 gap-1 items-center lg:h-20 md:h-16 h-14 rounded-lg lg:text-lg md:text-md text-xs relative`}
            key={item._id}
          >
            <div
              className="absolute inset-0  bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('${item.img}')`,
                opacity: 0.6, // Adjust the opacity as needed
              }}
            ></div>
            <div className="text-gray-700 bg-sky-200/40 text-xl font-semibold z-10 relative rounded-lg p-1">
             {item.title}
            </div>
          </Link>
        ))}
         
      </div>
    </div>
  );
};

export default CategoryItems;
