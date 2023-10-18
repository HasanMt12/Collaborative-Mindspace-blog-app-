"use client"
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import { useEffect, useState } from "react";
import { FaPenFancy } from 'react-icons/fa'
import EditorsFavorite from "../editors-favorite/EditorsFavorite";

const Menu = () => {
   const [topPosts, setTopPosts] = useState([]);
  const [ediTorsChoice, setEdiTorsChoice] = useState([]);

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
  
    useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/editors-favorite");
        if (response.ok) {
          const data = await response.json();
          setEdiTorsChoice(data.posts);
        }
      } catch (error) {
        console.error("Error fetching editors choice posts:", error);
      }
    };

    fetchTopPosts();
  }, []);
  return (
    <div className="flex-[2] lg:mt-8 md:mt-5 mt-3 sm:hidden md:block">
      <h2 className="text-gray-500 text-lg "> The Latest Craze </h2>
      
     <div className="flex justify-start items-center gap-1 text-sky-600 lg:mb-4 md:mb-2 mb-1 lg:mt-2 mt-1">
        <h1 className=" font-semibold font-merriweather">Most Trendy __ </h1><FaPenFancy />
     </div>

      {/* show most 2 views post */}
      {topPosts.map((post) => (
          <MenuPosts key={post.id} mostPostData={post} />
      ))}

      <h2 className="text-gray-500 text-lg "> Navigate by Interests </h2>
      <div className="flex justify-start items-center gap-1 text-sky-600 lg:mb-4 md:mb-2 mb-1 lg:mt-2 mt-1">
        <h1 className=" font-semibold font-merriweather">categories __ </h1><FaPenFancy />
      </div>
      <MenuCategories />

      <h2 className="text-gray-500 text-lg" >Chosen by the editor</h2>

      <div className="flex justify-start items-center gap-1 text-sky-600 lg:mb-2 md:mb-1 mb-0 lg:mt-2 mt-1">
        <h1 className=" font-semibold font-merriweather">Editors Favorite __ </h1><FaPenFancy />
      </div>

        {ediTorsChoice.map((post) => (
            <EditorsFavorite key={post.id} ediTorsChoice={post} />
        ))}

    </div>
  );
};

export default Menu;
