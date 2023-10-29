import { BASE_API_URL } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch(`${BASE_API_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className="flex flex-wrap gap-2 mb-6 mt-4">
       
      {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}  title={`${item.title} blogs`}
            className={`w-fit py-1 px-2 text-white rounded-md
             ${item.title === 'travel' && 'bg-[#7EA3A1]'} 
             ${item.title === 'lifestyle' && 'bg-[#A694B8]'}
             ${item.title === 'food' && 'bg-[#6B4423]'}
             ${item.title === 'coding' && 'bg-[#4078C0]'}
             ${item.title === 'fashion' && 'bg-[#C0C0C0]'}
             ${item.title === 'culture' && 'bg-[#A28776]'}
            `}
            key={item._id}
          >
            <div>
             {item.title}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MenuCategories;
