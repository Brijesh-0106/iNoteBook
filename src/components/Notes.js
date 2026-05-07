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
        // eslint-disable-next-line
    }, [])

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
        props.showalert("Note Updated successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Addnote showalert={props.showalert} />

            <button type="button" ref={ref} className="btn d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content glass-panel" style={{ border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                        <div className="modal-header border-secondary border-opacity-25">
                            <h5 className="modal-title text-white" id="exampleModalLabel"><i className="fa-solid fa-pen-to-square text-primary me-2"></i> Update Note</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label text-muted">Title</label>
                                    <input type="text" className="form-control form-control-luxury" name='etitle' id="etitle" value={note.etitle} onChange={onChange} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label text-muted">Tag</label>
                                    <input type="text" className="form-control form-control-luxury" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label text-muted">Description</label>
                                    <textarea className="form-control form-control-luxury" id="edescription" name='edescription' value={note.edescription} rows="4" onChange={onChange} minLength={3} required></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-secondary border-opacity-25">
                            <button type="button" ref={refClose} className="btn btn-outline-luxury" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn-luxury" onClick={handleClick} disabled={note.etitle.length < 3 || note.edescription.length < 3}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-4 d-flex align-items-center">
                <h3 className="text-white mb-0">Your Notes</h3>
                <span className="badge bg-primary rounded-pill ms-3">{notes.length}</span>
            </div>

            {notes.length === 0 ? (
                <div className="text-center py-5 glass-panel opacity-50">
                    <i className="fa-solid fa-folder-open fa-3x text-muted mb-3"></i>
                    <h5 className="text-muted">No notes found. Create your first note above!</h5>
                </div>
            ) : (
                <div className="row g-4">
                    {notes.map((note) => {
                        return <Noteitem key={note._id} showalert={props.showalert} updateNote={updateNote} note={note} />
                    })}
                </div>
            )}
        </>
    )
}

export default Notes
