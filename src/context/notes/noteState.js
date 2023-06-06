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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NzI3MDk1ZDIzY2MyYzIxNmQ2ZThhIn0sImlhdCI6MTY4NTUzMDM5MX0.6ENR0s5hvFt04YaBWVuUrQlMU8H2vsSuXviEYbFQ4sQ"
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NzI3MDk1ZDIzY2MyYzIxNmQ2ZThhIn0sImlhdCI6MTY4NTUzMDM5MX0.6ENR0s5hvFt04YaBWVuUrQlMU8H2vsSuXviEYbFQ4sQ"
            },
            body: JSON.stringify({ title: title, description: description, tag: tag }),
        });
        const note = {
            "_id": "647c1618653e444c345dfdc37",
            "user": "647727095d423cc2c216d6e8a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-06-04T04:42:00.803Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }



    // edit note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NzI3MDk1ZDIzY2MyYzIxNmQ2ZThhIn0sImlhdCI6MTY4NTUzMDM5MX0.6ENR0s5hvFt04YaBWVuUrQlMU8H2vsSuXviEYbFQ4sQ"
            },
            body: JSON.stringify({ title: title, description: description, tag: tag }),
        });
        const json = response.json();

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.tag = tag;
                element.description = description;
            }
        }
    }



    // delete note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NzI3MDk1ZDIzY2MyYzIxNmQ2ZThhIn0sImlhdCI6MTY4NTUzMDM5MX0.6ENR0s5hvFt04YaBWVuUrQlMU8H2vsSuXviEYbFQ4sQ"
            },
        });
        const json = response.json();
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