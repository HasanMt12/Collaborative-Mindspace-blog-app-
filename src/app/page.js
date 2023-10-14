import Featured from "@/components/featured/HeroSection";
import CategoryItems from "@/components/categoryList/CategoryItems";
import BlogCardList from "@/components/blogCardList/BlogCardList";
import Menu from "@/components/blogMenu/Menu";

export default function Home({ searchParams }) {
   const page = parseInt(searchParams.page) || 1;
  return (
    <div className="min-h-screen">
      <Featured />
      <CategoryItems />
      <div className="flex gap-12">
        <BlogCardList page={page}/>
        <Menu />
      </div>
    </div>
  )
}
