import React from 'react'
import Banner from './Banner';
import Menu from './Menu';
import About from './About';
import Contact from './Contact'
import Mission from './Mission';
import './Home.css';

function Home() {
  return (
    <>
<div className="container px-4 home-container">
<Banner/>
<Menu/>
{/* <About/> */}
{/* <Contact/> */}
<Mission/>
</div>


    </>
  )
}

export default Home