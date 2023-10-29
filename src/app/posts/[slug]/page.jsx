import Image from "next/image";
import Menu from "@/components/blogMenu/Menu";
import Comments from "@/components/comments/Comments";
import { BASE_API_URL } from "@/utils/constants";


const getData = async (slug) => {
  const res = await fetch(`${BASE_API_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const SinglePage = async ({ params }) => {
   const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="min-h-screen mt-2">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="lg:text-5xl md:text-2xl sm:text-xl lg:mb-12 md:mb-8 sm:mb-6">{data?.title}</h1>
          <div className="flex items-center gap-5">
          {data?.user?.image && (
              <div className="relative w-12 h-12">
                <Image src={data.user.image} alt="" fill className="rounded-[50%] object-cover" />
              </div>
          )}
            <div className="flex flex-col gap-1 text-gray-500">
              <span className="text-sm font-medium ">{data?.user.name}</span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>
      {data?.img && (
          <div className="flex-1 relative h-80 hidden sm:block">
            <Image src={data.img} alt="" fill className="object-cover" />
          </div>
      )}
      </div>
      <div className="flex gap-12">
        <div className="flex-[5] mt-14">
          <div
            className="text-sm font-[300] mb-5"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
          <div >
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
