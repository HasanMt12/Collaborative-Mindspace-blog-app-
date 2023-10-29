"use client";

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import 'react-quill/dist/quill.snow.css';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { BsImageFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { useTheme } from "@/context/ThemeContext";

import dynamic from 'next/dynamic';
import { BASE_API_URL } from "@/utils/constants";
import ReactQuill from "react-quill";




const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const QuillEditor = dynamic(() => import('react-quill'), {
  ssr: false, // Disable server-side rendering for this component
  });


  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch(`${BASE_API_URL}/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "lifeStyle", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };
  return (

    <div className={`flex relative flex-col lg:px-32 md:px-4 px-0 py-2 rounded-lg shadow-sm mb-1
    ${theme === 'light' ? 'bg-gray-100' : 'bg-[#2b2b2b]'}
    ${theme === 'light' ? 'shadow-[#adad9d] shadow-lg' : 'shadow-[#2e2e2e]'}
    `} >
      <input
        type="text"
        placeholder="write a blog Title"
        className="py-5 lg:mt-8 md:mt-6 mt-4 font-merriweather lg:border-y-[1px] md:border-b-[1px] border-b-[1px] border-gray-200 border-dashed outline-none bg-transparent placeholder-gray-500 text-gray-500 text-xl"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex justify-start items-center relative my-2 gap-5">
     
        <button title="upload photo" className="flex justify-center items-center  h-8 w-8 rounded-[50%] hover:bg-[#194545] border-cyan-700 border-1" onClick={() => setOpen(!open)}>
          <AiOutlinePlus className="text-cyan-600 hover:text-[#78C7C7]"/>
        </button>
        {open && (
          <div className="flex absolute z-[999] right-12 gap-5 w-full">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="flex justify-center items-center h-8 w-8 rounded-[50%] border-cyan-700 border-1">
              <label htmlFor="image">
                <BsImageFill className="cursor-pointer text-[#78C7C7]"/> 
              </label>
            </button>
           
          </div>
        )}
        <select title="select blog category" className=" px-2 py-2 max-w-max cursor-pointer bg-[#78C7C7] rounded-full border-cyan-600 hover:text-[#78C7C7] hover:bg-[#194545] text-white " onChange={(e) => setCatSlug(e.target.value)}>
        <option className="cursor-pointer text-white" value="lifestyle">lifestyle</option>
        <option className="cursor-pointer text-white" value="fashion">fashion</option>
        <option className="cursor-pointer text-white" value="food">food</option>
        <option className="cursor-pointer text-white" value="culture">culture</option>
        <option className="cursor-pointer text-white" value="travel">travel</option>
        <option className="cursor-pointer text-white" value="coding">coding</option>
      </select>
        </div>
        <div className="flex relative lg:h-[400px]  md:h-[360px] h-[200px] lg:mb-10 md:mb-10 mb-12">
        {typeof document !== 'undefined' && (
          <ReactQuill
            className="w-full ml-0 mt-6 placeholder-sky-600 lg:text-lg md:text-md text-sm"
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
          )}
      
        </div>
      
      <button className="absolute lg:right-12 md:right-10 right-0 top-2 px-2 py-2 border-none bg-[#78C7C7] hover:text-[#78C7C7] hover:bg-[#194545] rounded-full text-white" onClick={handleSubmit}>
        Publish
      </button>
    </div>

  );
};

export default WritePage;
