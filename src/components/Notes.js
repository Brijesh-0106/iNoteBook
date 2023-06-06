import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem'
import Addnote from './Addnote'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNote } = context
    useEffect(() => {
        getNote()
    }, [])
    return (
        <>
            <Addnote />
            <div className="row">
                <div className='container text-bg-primary p-3 my-3'>
                    <h2>Your Notes</h2>
                </div>
                {/* title of every note with map function */}
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />
                    })
                }
            </div>
        </>
    )
}

export default Notes
