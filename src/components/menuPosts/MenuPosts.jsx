import Image from "next/image";
import Link from "next/link";
import React from "react";



const MenuPosts = async ({ withImage  }) => {

  return (
    <div className="flex flex-col gap-8 mb-14 mt-8">
       <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image src="/culture.png" alt="" fill className=" object-cover border-3 rounded-full border-gray-300" />
          </div>
        )}
        <div className="flex-[4] gap-1 flex-col">
          <span className={`w-fit py-1 px-2 text-white rounded-md bg-[#ff7857]`}>Travel</span>
          <h3 className="text-lg text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span >John Doe</span>
            <span className="text-gray"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
     
    </div>
  );
};

export default MenuPosts;
