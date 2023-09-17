import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import { useState } from 'react'

const Addnote = (props) => {

    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showalert("Added successfully", "success")

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className='container text-bg-primary p-3 my-3'>
                <h2>Add Notes</h2>
            </div>
            <div className='container my-3'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" value={note.title} name='title' id="title" aria-describedby="emailHelp" onChange={onChange} minLength={3} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" value={note.description} id="description" name='description' onChange={onChange} minLength={3} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" value={note.tag} id="tag" name='tag' onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={handleClick} disabled={note.title.length < 3 || note.description.length < 3}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote