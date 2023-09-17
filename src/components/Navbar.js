import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let navigate = useNavigate()

    let location = useLocation();
    
    useEffect(() => {
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link className="btn btn-light mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-light mx-1" to="/signup" role="button">SignUp</Link>
                    </form> : <button onClick={handleLogout} className='btn btn-light mx-1'>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
