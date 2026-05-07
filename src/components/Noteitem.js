import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context

    return (
        <div className='col-md-6 col-lg-4 mb-4'>
            <div className="glass-panel h-100 position-relative overflow-hidden p-4 d-flex flex-column" style={{ borderTop: '2px solid rgba(139, 92, 246, 0.5)' }}>
                {/* Decorative glow */}
                <div className="position-absolute top-0 end-0 p-3" style={{ opacity: 0.05, zIndex: 0, transform: 'scale(1.5) translate(10px, -10px)' }}>
                    <i className="fa-solid fa-quote-right fa-4x text-primary"></i>
                </div>
                
                <div className="position-relative flex-grow-1" style={{ zIndex: 1 }}>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="fw-bold text-white mb-0 pe-3 fs-5 lh-base">{props.note.title}</h5>
                        {props.note.tag && (
                            <span className="badge rounded-pill shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))', color: '#f472b6', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '6px 12px' }}>
                                {props.note.tag}
                            </span>
                        )}
                    </div>
                    <p className="text-muted mt-3 mb-0 fs-6 lh-lg" style={{ minHeight: '80px', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {props.note.description}
                    </p>
                </div>

                <div className="position-relative mt-4 pt-3 border-top border-secondary border-opacity-25" style={{ zIndex: 1 }}>
                    <div className="d-flex justify-content-end gap-2">
                        <button className="btn btn-sm btn-outline-info rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '40px', height: '40px' }} onClick={() => { props.updateNote(props.note) }}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '40px', height: '40px' }} onClick={() => { deleteNote(props.note._id); props.showalert("Note Deleted successfully", "success") }}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
