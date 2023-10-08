import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-5 mb-14 mt-8">
      <Link
        href="/blog?cat=style"
        className={`px-3 py-6 rounded-lg text-[14px] bg-[#57c4ff31]`}
      >
        Style
      </Link>
      <Link href="/blog" className={`px-3 py-6 rounded-lg text-[14px] #57c4ff31`}>
        Fashion
      </Link>
      <Link href="/blog" className={`px-3 py-6 rounded-lg text-[14px] #57c4ff31`}>
        Food
      </Link>
      <Link href="/blog" className={`px-3 py-6 rounded-lg text-[14px] #57c4ff31`}>
        Travel
      </Link>
      <Link href="/blog" className={`px-3 py-6 rounded-lg text-[14px] #57c4ff31`}>
        Culture
      </Link>
      <Link href="/blog" className={`px-3 py-6 rounded-lg text-[14px] #57c4ff31`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
