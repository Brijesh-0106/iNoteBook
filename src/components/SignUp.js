import React, { useState } from 'react'
import { useNavigate } from 'react-router'      //Instead of useHistory.

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
        // console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.jwtToken)//jwtToken, if error occurs.
            navigate("/")       //Used to nevigate to home page.
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
        <div>
            <form className='container my-3' onSubmit={handleClick}>
                <div className="mb-3 my-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 my-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 my-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange} name='password' required minLength={3} />
                </div>
                <div className="mb-3 my-2">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" onChange={onChange} name='cpassword' required minLength={3} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
