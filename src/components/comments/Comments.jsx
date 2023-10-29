"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaPenFancy } from 'react-icons/fa'
import { BASE_API_URL } from "@/utils/constants";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {

  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${BASE_API_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch(`${BASE_API_URL}/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="mt-12">
      <div className="flex justify-start mb-2 items-center gap-1 text-sky-600 lg:mb-6 md:mb-4 ">
        <h1 className=" font-semibold font-merriweather">Comments __ </h1><FaPenFancy />
      </div>
   
       {status === "authenticated" ? (
        <div className="flex justify-between items-center  gap-5">
          <textarea
            placeholder="write a comment... "
            className="p-3 w-full border-b border-cyan-600"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="py-2 px-4 text-md bg-sky-600 border-none text-white font-bold rounded-lg" onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <>
        <h1 className=" font-semibold text-sky-600 font-merriweather">To add your comment to this post,</h1>
        <h2 className="font-merriweather text-lg">please login <span className="underline text-sky-600"><Link href="/login">here</Link></span></h2>
        </>
      )}
      <div className="mt-12">
               {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className="border-[1px] rounded-md border-gray-200 p-2 mb-4" key={item._id}>
                <div className="flex items-center gap-5 mb-5">
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-[50%] relative h-12 w-12 object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1 text-gray-500">
                    <span className="font-medium">{item.user.name}</span>
                    <span className="lg:text-sm md:text-xs text-[10px]">{item.createdAt}</span>
                  </div>
                </div>
                <p className="text-sm font-normal">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
