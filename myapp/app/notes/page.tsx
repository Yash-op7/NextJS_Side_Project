import Link from "next/link";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

async function getNotes() {
  //   const res = await fetch(
  //     "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
  //   );
  //   const data = await res.json();

  //   return data?.items as any[];

  const records = await pb.collection("notes").getFullList({
    sort: "-created",
  });
  console.log(records);
  return records as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="text-5xl mb-2">Notes</h1>
      <hr className="border-t-2 border-gray-400 mb-8" />
      <div className="grid grid-cols-3">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-yellow-100 text-black p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h2 className="text-5xl font-semibold mb-2">{title}</h2>
        <h5 className="text-lg mb-4">{content}</h5>
        <hr className="border-t-2 border-gray-400 mb-1" />
        <p className="text-sm font-bold text-gray-600">{created}</p>
      </div>
    </Link>
  );
}
