import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const SignUp = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    
    const handleClick = async (e) => {
        e.preventDefault()
        const { name, email, password } = credentials
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.jwtToken)
            navigate("/dashboard")
            props.showalert("Sign successfully", "success");
        }
        else {
            props.showalert("Sign in failed", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen d-flex align-items-center justify-content-center py-5 position-relative overflow-hidden" style={{ paddingTop: '100px' }}>
            <div className="bg-orb-3"></div>
            <div className="float-anim z-1 w-100 d-flex justify-content-center">
                <div className="glass-panel p-5 w-100 mx-3 shadow-lg" style={{ maxWidth: '550px', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                    <div className="text-center mb-5">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-lg" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, var(--accent), var(--secondary))' }}>
                            <i className="fa-solid fa-user-plus text-white fs-4"></i>
                        </div>
                        <h2 className="fw-black text-white mb-2 display-6">Create Account</h2>
                        <p className="text-muted">Join the premium digital workspace</p>
                    </div>
                    <form onSubmit={handleClick}>
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label text-muted fw-medium ms-1">Full Name</label>
                            <input type="text" className="form-control form-control-luxury px-4 py-3" id="name" name='name' onChange={onChange} placeholder="John Doe" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label text-muted fw-medium ms-1">Email Address</label>
                            <input type="email" className="form-control form-control-luxury px-4 py-3" id="email" name='email' onChange={onChange} placeholder="name@example.com" required />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <label htmlFor="password" className="form-label text-muted fw-medium ms-1">Password</label>
                                <input type="password" className="form-control form-control-luxury px-4 py-3" id="password" onChange={onChange} name='password' required minLength={3} placeholder="••••••••" />
                            </div>
                            <div className="col-md-6 mb-5">
                                <label htmlFor="cpassword" className="form-label text-muted fw-medium ms-1">Confirm Password</label>
                                <input type="password" className="form-control form-control-luxury px-4 py-3" id="cpassword" onChange={onChange} name='cpassword' required minLength={3} placeholder="••••••••" />
                            </div>
                        </div>
                        <button type="submit" className="btn-luxury w-100 py-3 fs-5 mb-4 shadow-lg">Sign Up <i className="fa-solid fa-arrow-right ms-2"></i></button>
                        <div className="text-center mt-3 pt-3 border-top border-secondary border-opacity-25">
                            <span className="text-muted">Already have an account? </span>
                            <Link to="/login" className="text-primary text-decoration-none fw-bold ms-1">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
