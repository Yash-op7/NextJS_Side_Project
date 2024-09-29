import React from "react";
import PocketBase from "pocketbase";
import { Note } from "../page";

const pb = new PocketBase("http://127.0.0.1:8090");


async function getNote(noteId: string) {
    const record = await pb.collection('notes').getOne(noteId, {
        expand: 'relField1,relField2.subRelField',
    });
    return record;
}

const NotePage = async ({params}:any) => {
    const note = await getNote(params.id);
    return (
        <div>
             <h1 className="text-5xl mb-2">Notes/{note.id}</h1>
             <hr className="border-t-2 border-gray-400 mb-8" />
            <Note note={note} />
        </div>
    )
};

export default NotePage;
