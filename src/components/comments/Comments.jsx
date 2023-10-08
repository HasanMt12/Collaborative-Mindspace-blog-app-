"use client";

import Link from "next/link";
import Image from "next/image";


const Comments = () => {
  return (
    <div className="mt-12">
      <h1 className="mb-7 text-gray-500">Comments</h1>
   
        <div className="flex justify-between items-center gap-7">
          <textarea
            placeholder="write a comment..."
            className="p-5 w-full"
           
          />
          <button className="py-4 px-5 bg-sky-600 border-none text-white font-bold rounded-sm" >
            Send
          </button>
        </div>
   
        <Link href="/login">Login to write a comment</Link>
      
      <div className="mt-12">
      
              <div className="mb-12" >
                <div className="flex items-center gap-5 mb-5">
                
                    <Image
                      src="/fashion.png"
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-[50%] relative h-12 w-12 object-cover"
                    />
        
                  <div className="flex flex-col gap-1 text-gray-500">
                    <span className="font-medium">user name</span>
                    <span className="text-sm">20/12/23</span>
                  </div>
                </div>
                <p className="text-lg font-normal">this is description</p>
              </div>

      </div>
    </div>
  );
};

export default Comments;
