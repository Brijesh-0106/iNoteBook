import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem'
import Addnote from './Addnote'
import { useNavigate } from 'react-router'

const Notes = (props) => {

    const context = useContext(noteContext)
    const navigate = useNavigate()

    const { notes, getNote, editNote } = context

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNote()
        } else {
            navigate('/login')
        }
    }, [])

    //ref to give reference to another element.
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showalert("Updated successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <>
            <Addnote showalert={props.showalert} />           {/* d-none is for display none */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" name='etitle' id="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick} disabled={note.etitle.length < 3 || note.edescription.length < 3}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='container text-bg-primary p-3 my-3'>
                    <h2>Your Notes</h2>
                </div>      {/* title of every note with map function */}
                <h2>
                    {notes.length === 0 && "No notes to display!"}
                </h2>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} showalert={props.showalert} updateNote={updateNote} note={note} />
                    })
                }
            </div>
        </>
    )
}

export default Notes
