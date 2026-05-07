import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate()
    let location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-custom navbar-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <i className="fa-solid fa-bolt text-gradient"></i> iNoteBook
                </Link>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        {localStorage.getItem('token') && (
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard">Dashboard</Link>
                            </li>
                        )}
                    </ul>
                    <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                        {!localStorage.getItem('token') ? (
                            <>
                                <Link className="nav-link" to="/login">Sign In</Link>
                                <Link className="btn-luxury text-decoration-none" to="/signup">Get Started</Link>
                            </>
                        ) : (
                            <button onClick={handleLogout} className='btn-outline-luxury'>Log Out</button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

