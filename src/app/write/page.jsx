"use client";

import Image from "next/image";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";


import ReactQuill from "react-quill";

const WritePage = () => {


  const [open, setOpen] = useState(false);


 
  return (
    <div className="flex flex-col relative">
      <input
        type="text"
        placeholder="Title"
        className="p-12 text-6xl outline-none border-none bg-transparent placeholder-[#b3b3b1]"
      />
      <select className="px-2 py-5 mb-12 ml-12 max-w-max" >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex relative gap-5 h-[700px]">
        <button className="w-8 h-8 bg-transparent flex justify-center items-center rounded-[50%] border-gray-800 border-1" >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex absolute z-[999] left-[50px] gap-5 w-full bg-gray-300">
            <input
              type="file"
              id="image"
              style={{ display: "none" }}
            />
            <button className="w-8 h-8 bg-transparent flex justify-center items-center rounded-[50%] border-[#1a8917] border-1">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className="w-8 h-8 bg-transparent flex justify-center items-center rounded-[50%] border-[#1a8917] border-1">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="w-8 h-8 bg-transparent flex justify-center items-center rounded-[50%] border-[#1a8917] border-1">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          placeholder="Tell your story..."
        />
      </div>
      <button className="absolute top-0 right-0 px-2 py-5  border-none bg-[#1a8917] text-white cursor-pointer rounded-2xl">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
