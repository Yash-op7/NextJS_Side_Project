import Link from "next/link";
import PocketBase from "pocketbase";
import RenderContent from "./RenderContent";

import CreateNote from "./CreateNote";
import DeleteNote from "./DeleteNote";

const pb = new PocketBase("http://127.0.0.1:8090");

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  const resultList = await pb.collection("notes").getList(1, 50, {
    filter: 'created >= "2022-01-04 00:00:00"',
  });
  return resultList?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1 className="text-5xl mb-2">Notes</h1>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="grid grid-cols-1">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

export function Note({ note }: any) {
  const { id, title, content, created, deadline } = note || {};


  return (
    <div>
      <div className="m-2 bg-yellow-100 text-black p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <div className="flex flex-row">
          <Link href={`/notes/${id}`} className="text-3xl font-semibold mb-2">
            {title}
          </Link>
          <button>
            <DeleteNote noteId={id}/>
          </button>
        </div>
        <h5 className="text-lg mb-4">
          <RenderContent
            content={content}
            createdAt={created}
            deadline={deadline}
          />
        </h5>
        <hr className="border-t-2 border-gray-400 mb-1" />
        <p className="text-sm font-bold text-gray-600">{created}</p>
      </div>
    </div>
  );
}
