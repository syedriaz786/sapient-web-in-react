import React from 'react'
import './About.css'

function About () {
  return (
    <>
    <div className="row about-row ">
        <div className="col about-col d-flex flex-column justify-content-center align-items-center  py-5 px-md-5">
            <h1 className='fs-1'>About</h1>

            <p className='text-center py-2 px-md-5 mx-md-5'>Hey there! We're a team of five studious software developers studying <br />
             web development at UNC Chapel Hill.</p>
        </div>
    </div>
    </>
  )
}

export default About
