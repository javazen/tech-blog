
"use client";
import axios from "axios";
// import dynamic from "next/dynamic";
import { useMemo, useState } from "react"; // , useRef
import type { SubmitEventHandler } from "react";
import toast from "react-hot-toast";

// only import when needed
// const JoditEditor = dynamic(() => import("jodit-react"), {
//   ssr: false,
// });

export default function WritePage() {
  // const editor = useRef(null);
  const [content, setContent] = useState('this is dummy content for testing');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImage, setCoverImage] = useState<null | File>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const config = useMemo(() => ({
    placeholder: "Start writing your article...",
    theme: "dark",
    style: {
      backgroundColor: "#121212",
      color: "#d1d5dc"
    }
  }),
    []
  );

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      if (!title || !content || !excerpt || !coverImage) {
        toast("All fields are required", {
          style: {
            color: "white",
            background: "#1e3a8a"
          }
        });
        return;
      }
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("excerpt", excerpt);
      formData.append("coverImage", coverImage);

      await axios.post("/api/posts",formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      });
      
      setContent("");
      setTitle("");
      setExcerpt("");
      setCoverImage(null);

      toast("Article published successfully", {
        style: {
          color: "white",
          background: "#1e3a8a",
        },
      });

    } catch (error) {
      // console.log(error);
      if (axios.isAxiosError(error)) {
        // toast to the user
        // console.log(error.response?.data);
        toast(error.response?.data.error, {
          style: {
            color: "white",
            background: "#1e3a8a"
          }
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        Write a new article
      </h1>

      <form onSubmit={handleSubmit}>
        {/* title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Article Title"
          className="w-full bg-transparent text-4xl font-bold text-white placeholder-gray-500 outline-none mb-6" />

        {/* excerpt */}
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Write a short excerpt (1–2 sentences)"
          rows={3}
          className=" w-full bg-secondary-background
          text-gray-200 placeholder-gray-500
          rounded-xl p-4 mb-8
          outline-none resize-none
          border border-white/10
          focus:border-indigo-500/50"
        />

        {/* image upload */}
        <div>
          <label className="block text-gray-400 mb-2">
            Cover Image
          </label>
          <input
            onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full
            file:border-0
            file:bg-primary
            file:text-white
            hover:file:bg-indigo-500"
          />
        </div>

        {/* editor
        <div className="border border-white/10">
        <p>Jodit Editor will go here</p>
        </div> */}

        {/* submit */}
        <div className="flex my-6 justify-end">
          <button type="submit" className="px-6 py-3 rounded-full bg-primary cursor-pointer text-white font-semibold">
            {isSubmitting ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </section>
  )
}
