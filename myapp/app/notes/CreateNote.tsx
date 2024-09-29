"use client";

import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function CreateNote() {  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    // example create data
    const data = {
      title,
      content,
      deadline: "2024-10-01 10:00:00.123Z",
    };

    const record = await pb.collection("notes").create(data);
    setTitle("");
    setContent("");
    router.refresh();
  };

  return (
    <div className="m-5 border">
      <form onSubmit={create} className="flex flex-col gap-5 items-center">
        <h3>Create a new Note</h3>
        <input
        className="min-w-80 p-2 text-black"

          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        className="min-w-80 p-2 text-black"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="border m-2 p-2 hover:bg-green-500 hover:text-black">Create Note</button>
      </form>
    </div>
  );
}
