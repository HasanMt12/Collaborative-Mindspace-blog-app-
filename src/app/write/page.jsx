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
    <div className="flex relative flex-col">
      <input
        type="text"
        placeholder="Title"
        className="p-12 border-none outline-none bg-transparent placeholder-gray-500 text-gray-500"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className="mb-12 px-2 py-5 max-w-max" onChange={(e) => setCatSlug(e.target.value)}>
        <option value="lifestyle">lifestyle</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex relative h-[700px] gap-5">
        <button className="flex justify-center items-center h-8 w-8 rounded-[50%] border-gray-700 border-1" onClick={() => setOpen(!open)}>
          <AiOutlinePlus />
        </button>
        {open && (
          <div className="flex absolute z-[999] left-12 gap-5 w-full">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="flex justify-center items-center h-8 w-8 rounded-[50%] border-gray-700 border-1">
              <label htmlFor="image">
              <BsImageFill /> 
              </label>
            </button>
            <button className="flex justify-center items-center h-8 w-8 rounded-[50%] border-gray-700 border-1">
              <AiOutlineUpload />
            </button>
           
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className="absolute right-0 top-0 px-2 py-5 border-none bg-green-500 rounded-sm text-white" onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
