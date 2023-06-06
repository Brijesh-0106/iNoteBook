import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const { note } = props

    const context = useContext(noteContext)
    const { deleteNote } = context
    return (
        <div className='col-md-6'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}.</p>
                    <i className="fa-solid fa-trash mx-3" onClick={()=>deleteNote(note._id)}></i>
                    <i className="fa-sharp fa-solid fa-pen-to-square mx-3"></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
