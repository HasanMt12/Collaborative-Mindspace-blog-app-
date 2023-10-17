import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = async ({  mostPostData   }) => {

    function truncateText(text, maxLength) {
      if (text && text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
      }
      return text || ''; // Return an empty string if text is undefined
    } 


  return (
    <div className="flex flex-col gap-8 mb-14 mt-8">
       <Link href={`/posts/${mostPostData?.slug}`} className="flex items-center gap-5">
        {mostPostData && (
          <div className="flex-1 relative aspect-square">
            <Image src={mostPostData?.img} alt="" fill className=" object-cover border-3 rounded-full border-gray-300" />
          </div>
        )}
        <div className="flex-[4] gap-1 flex-col">

        {/* Dynamically set background colors for each category. */}
          <span className={`w-fit py-1 px-2 text-white rounded-md 
          ${mostPostData?.catSlug === 'travel' && 'bg-[#7EA3A1]'} 
          ${mostPostData?.catSlug === 'lifestyle' && 'bg-[#A694B8]'}
          ${mostPostData?.catSlug === 'food' && 'bg-[#6B4423]'}
          ${mostPostData?.catSlug === 'coding' && 'bg-[#4078C0]'}
          ${mostPostData?.catSlug === 'fashion' && 'bg-[#C0C0C0]'}
          ${mostPostData?.catSlug === 'culture' && 'bg-[#A28776]'}
          }`}> {mostPostData?.catSlug} </span>
          
           <div className="lg:text-md md:text-sm text-xs lg:mt-4 md:mt-2 mt-1"
              dangerouslySetInnerHTML={{
                __html: truncateText(mostPostData?.desc, 120)
              }}
             />
            <Link href={`/posts/${mostPostData?.slug}`} className="text-sky-600 border-b hover:border-cyan-600 w-fit lg:text-md md:text-sm text-xs lg:mb-4 md:mb-2 mb-1">
              Continue Reading
            </Link>
          <div className="text-xs">
            <span className="text-[#A58160]">{mostPostData?.userEmail.split('@')[0]}</span>
            <span className="text-gray "> - {mostPostData?.createdAt.substring(0, 10)}</span>
          </div>
        </div>
      </Link>
     
    </div>
  );
};

export default MenuPosts;
