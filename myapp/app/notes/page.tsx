async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
  );
  const data = await res.json();

  return data?.items as any[];
}

export default async function NotesPage() {
  return <div></div>;
}
