import React, { useState } from 'react'
import { useNavigate } from 'react-router'      //Instead of useHistory hook.

const Login = (props) => {
    const host = "http://localhost:5000"
    // Navigate hook to Navigate in page.
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
        // console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.jwtToken)//jwtToken, if error occurs.
            navigate("/")       //Used to nevigate to home page.
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
        <div>
            <form className='container my-3' onSubmit={handleClick}>
                <div className="mb-3 my-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" value={credentials.email} name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 my-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} id="password" name='password' value={credentials.password} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default Login
