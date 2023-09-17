// noteState ==> provides content(props or state) to noteContext.
import { useState } from "react";
import NoteContext from "./noteContext";
// Context API is commited so use time machine to get the code.

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)



    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json)
    }



    // add note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token")
            },
            body: JSON.stringify({ title: title, description: description, tag: tag }),
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }



    // edit note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title: title, description: description, tag: tag }),
        });
        const json = response.json();

        let newNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNotes(newNote);
    }



    // delete note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json();
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }



    return (
        // {for javascript {for object} }
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNote }}>
            {/* content provider to noteContext */}
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;