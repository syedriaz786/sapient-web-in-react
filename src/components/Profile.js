import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'




function Profile() {

    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/");
    }

    const [userData, setUserData] = useState({})
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    const showData = async () => {
        const response = await fetch("http://localhost:5000/api/auth/getuserdata", {

            method: "POST",
            crossDomain: true,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                "Accept-Control-Allow-Origin": "/",
            },
            body: JSON.stringify({
                authtoken: window.localStorage.getItem('token'),
            }),
        })


        const json = await response.json();
        navigate("/profile");

        setNotes(json);

        //.then((res) => res.json())

        console.log(json, "UserData");
        setUserData(json)
    }

    // const notesInitial = []
    // const [notes, setNotes] = useState(notesInitial)


    // const getUserData = async () => {

    //     // API CALL

    //     const response = await fetch(`http://localhost:5000/api/auth/getuserdata`, {
    //         method: 'GET',

    //         headers: {
    //             'Content-Type': 'application/json',
    //             // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNGNiYzI2NzY5N2U2NDExMzBkNDI4In0sImlhdCI6MTY2MzM1Nzc1NX0.gdkr-JwIghChYc0l4eR81ALGvrm8PcxfVFpKSeFi-1M"
    //             "auth-token": localStorage.getItem('token')
    //         }
    //     });
    //     const json = await response.json()
    //     navigate("/profile");
    //     setNotes(json);
    // }



    useEffect(() => {
        if (localStorage.getItem('token')) {
            showData();
        }
        else {
            navigate("/");
        }

    }, [])


    return (
        <>
            {/* {props.showName} */}
            <div className='container-fluid profile d-flex flex-column justify-content-center align-items-center'>
                <span className='fs-1 text-white text-center'> Welcome User "{userData.data?.name}" </span>
                <br />

                <button type='button' onClick={handleLogout} className=' py-2 px-3 border-0 rounded text-white'>Logout</button>
            </div>
        </>
    )

}
export default Profile