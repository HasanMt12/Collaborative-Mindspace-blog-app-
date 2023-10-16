"use client"
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import { useEffect, useState } from "react";
import { FaPenFancy } from 'react-icons/fa'

const Menu = () => {
   const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/max-views");
        if (response.ok) {
          const data = await response.json();
          setTopPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching top posts:", error);
      }
    };

    fetchTopPosts();
  }, []);
  console.log(topPosts)
  return (
    <div className="flex-[2] mt-14 sm:hidden md:block">
      <h2 className="text-gray-500 text-lg "> The Latest Craze </h2>
      
     <div className="flex justify-start items-center gap-1 text-sky-600 lg:mb-4 md:mb-2 mb-1 lg:mt-2 mt-1">
      <h1 className=" font-semibold font-merriweather">Most Trendy __ </h1><FaPenFancy />
       </div>

      {/* show most 2 views post */}
      {topPosts.map((post) => (
          <MenuPosts key={post.id} mostPostData={post} />
      ))}

      <h2 className="text-gray-500 text-lg ">Discover by topic</h2>
      <h1 className="text-2xl">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500" text-lg>Chosen by the editor</h2>
      <h1 className="text-2xl">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
