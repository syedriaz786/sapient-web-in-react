import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'







function Login(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "", name: "" })
    let navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
                //   "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNGNiYzI2NzY5N2U2NDExMzBkNDI4In0sImlhdCI6MTY2MzM1Nzc1NX0.gdkr-JwIghChYc0l4eR81ALGvrm8PcxfVFpKSeFi-1M"

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, name: credentials.name }),

        });
        console.log(credentials.name)
        const json = await response.json();
        console.log(json);
        if (json.success) {

            // save the auth  token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/profile");
            props.loginTrigger(false);


        }
        else {
            alert("invalid email or password")
        }
    }




    return (props.loginTrigger) ? (
        <>
            <div className="container-fluid login-container">
                <div className="row login-row d-flex flex-column justify-content-center align-items-center ">
                    <div className="col-9 col-sm-6 col-md-6 col-lg-5 col-xxl-4 login-col rounded mt-5 ">
                        <div className='login-header d-flex justify-content-between '>
                            <span className='text-start text-white fs-3 pt-3'> Login:</span>  <i className="bi bi-x-lg text-dark rounded border-0 fs-4 mt-4 me-1 px-1" onClick={props.loginTrigger} ></i>
                        </div>
                        <hr className='text-white' />

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" className="form-label  my-2">Email:</label>
                            <input type="text" className="form-control" id="email" name='email' placeholder="Enter Email" onChange={onChange} value={credentials.email} />


                            <label htmlFor="password" className="form-label my-2">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter Password" id="password" name='password' onChange={onChange} value={credentials.password} />
                            <button type='submit' className=' my-3 text-white py-2 px-3 rounded border-0  '>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    ) : ""
}

export default Login