
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {

  return (
    <div className="flex-[2] mt-14 sm:hidden md:block">
      <h2 className="text-gray-500 text-lg ">{"What's hot"}</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <MenuPosts withImage={false} />
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
