import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {

    const context = useContext(noteContext)
    const { deleteNote } = context
    return (
        <div className='col-md-6'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>
                    <i className="fa-solid fa-trash mx-3" onClick={() => { deleteNote(props.note._id); props.showalert("Deleted successfully", "success") }}></i>
                    <i className="fa-sharp fa-solid fa-pen-to-square mx-3" onClick={() => { props.updateNote(props.note) }}></i>
                </div>
            </div>
        </div >
    )
}

export default Noteitem
