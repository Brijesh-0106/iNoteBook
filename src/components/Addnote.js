import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const Addnote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showalert("Note Added successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="glass-panel p-5 mb-5 shadow-lg position-relative overflow-hidden">
            <div className="position-absolute top-0 end-0 w-25 h-100" style={{ background: 'radial-gradient(ellipse at right, rgba(236,72,153,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <h3 className="mb-4 text-white fw-bold d-flex align-items-center">
                <div className="rounded bg-primary bg-opacity-25 d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', border: '1px solid rgba(139,92,246,0.3)' }}>
                    <i className="fa-solid fa-pen-nib text-primary"></i>
                </div>
                Create New Note
            </h3>
            <form>
                <div className="row g-4 mb-4">
                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label text-muted fw-medium ms-1">Title</label>
                        <input type="text" className="form-control form-control-luxury px-4 py-3" value={note.title} name='title' id="title" placeholder="What's on your mind?" onChange={onChange} minLength={3} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="tag" className="form-label text-muted fw-medium ms-1">Tag</label>
                        <input type="text" className="form-control form-control-luxury px-4 py-3" value={note.tag} id="tag" name='tag' placeholder="e.g. Work, Personal, Ideas" onChange={onChange} />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="form-label text-muted fw-medium ms-1">Description</label>
                    <textarea className="form-control form-control-luxury px-4 py-3" value={note.description} id="description" name='description' rows="4" placeholder="Write your thoughts..." onChange={onChange} minLength={3} required></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn-luxury px-5 py-3 shadow-lg" onClick={handleClick} disabled={note.title.length < 3 || note.description.length < 3}>
                        <i className="fa-solid fa-plus me-2"></i> Save Note
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Addnote