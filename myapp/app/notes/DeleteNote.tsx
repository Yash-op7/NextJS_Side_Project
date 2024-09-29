"use client";

import deleteIcon from "../assets/icons/deleteIcon.svg";
import Image from "next/image";

import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function CreateNote({noteId}) {
  const router = useRouter();

  const deleteNote = async () => {
    await pb.collection('notes').delete(noteId);
    router.refresh();
  };

  return (
    <div>
      <Image src={deleteIcon} onClick={deleteNote} className="h-10 w-10" />
    </div>
  );
}
