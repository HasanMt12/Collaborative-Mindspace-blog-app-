"use client";

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";
import { BsImageFill } from 'react-icons/bs';
import { AiOutlinePlus , AiOutlineUpload} from 'react-icons/ai';

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

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
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="flex relative flex-col lg:px-12 md:px-4 px-0">
      <input
        type="text"
        placeholder="Title"
        className="py-6 border-none outline-none bg-transparent placeholder-gray-500 text-gray-500"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select title="select blog category" className="mb-6 px-2 py-4 max-w-max cursor-pointer border-cyan-600 text-sky-600 " onChange={(e) => setCatSlug(e.target.value)}>
        <option className="cursor-pointer text-sky-600" value="lifestyle">lifestyle</option>
        <option className="cursor-pointer text-sky-600" value="fashion">fashion</option>
        <option className="cursor-pointer text-sky-600" value="food">food</option>
        <option className="cursor-pointer text-sky-600" value="culture">culture</option>
        <option className="cursor-pointer text-sky-600" value="travel">travel</option>
        <option className="cursor-pointer text-sky-600" value="coding">coding</option>
      </select>
      <div className="flex relative h-[700px] gap-5 mb-11">
        <button title="upload photo" className="flex justify-center items-center h-8 w-8 rounded-[50%] border-cyan-700 border-1" onClick={() => setOpen(!open)}>
          <AiOutlinePlus className="text-cyan-600"/>
        </button>
        {open && (
          <div className="flex absolute z-[999] left-12 gap-5 w-full">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="flex justify-center items-center h-8 w-8 rounded-[50%] border-cyan-700 border-1">
              <label htmlFor="image">
                <BsImageFill className="cursor-pointer text-sky-600"/> 
              </label>
            </button>
           
          </div>
        )}
        <ReactQuill
          className="w-full ml-0 mt-12 "
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story... &#x1F58A;"
        />
      </div>
      <button className="absolute lg:right-20 md:right-12 right-0 top-0 px-2 py-2 border-none bg-green-600 rounded-lg text-white" onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
