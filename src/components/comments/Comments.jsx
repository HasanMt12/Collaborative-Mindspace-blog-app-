"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

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
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="mt-12">
      <h1 className="mb-7 text-gray-500">Comments</h1>
   
       {status === "authenticated" ? (
        <div className="flex justify-between items-center  gap-5">
          <textarea
            placeholder="write a comment... "
            className="p-3 w-full border-b border-cyan-600"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="py-3 px-4 bg-sky-600 border-none text-white font-bold rounded-lg" onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-12">
               {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className=" mb-12" key={item._id}>
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
                    <span className="text-sm">{item.createdAt}</span>
                  </div>
                </div>
                <p className="text-lg font-normal">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
