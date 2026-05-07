import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = (props) => {
    const host = "http://localhost:5000"
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleClick = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.jwtToken)
            navigate("/dashboard")
            props.showalert("Login successfully", "success")
        }
        else {
            props.showalert("Login failed", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ paddingTop: '80px' }}>
            <div className="bg-orb-3"></div>
            <div className="float-anim z-1 w-100 d-flex justify-content-center">
                <div className="glass-panel p-5 w-100 mx-3 shadow-lg" style={{ maxWidth: '450px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                    <div className="text-center mb-5">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-lg" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
                            <i className="fa-solid fa-lock text-white fs-4"></i>
                        </div>
                        <h2 className="fw-black text-white mb-2 display-6">Welcome Back</h2>
                        <p className="text-muted">Sign in to your luxury workspace</p>
                    </div>
                    <form onSubmit={handleClick}>
                        <div className="mb-4 position-relative">
                            <label htmlFor="email" className="form-label text-muted fw-medium ms-1">Email Address</label>
                            <input type="email" className="form-control form-control-luxury px-4 py-3" onChange={onChange} id="email" value={credentials.email} name='email' placeholder="name@example.com" required />
                        </div>
                        <div className="mb-5 position-relative">
                            <label htmlFor="password" className="form-label text-muted fw-medium ms-1">Password</label>
                            <input type="password" className="form-control form-control-luxury px-4 py-3" onChange={onChange} id="password" name='password' value={credentials.password} placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="btn-luxury w-100 py-3 fs-5 mb-4 shadow-lg">Sign In <i className="fa-solid fa-arrow-right ms-2"></i></button>
                        <div className="text-center mt-3 pt-3 border-top border-secondary border-opacity-25">
                            <span className="text-muted">Don't have an account? </span>
                            <Link to="/signup" className="text-primary text-decoration-none fw-bold ms-1">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
