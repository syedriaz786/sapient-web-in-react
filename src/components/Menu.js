import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
    <nav>
    <div className="row menu-row">
        <div className="col menu-col text-center d-sm-flex justify-content-sm-center">
            <ul className='py-4'>
                <li className='py-4 px-lg-4 px-md-3 px-1 border-end border-secondary active'> <Link to="/">About Us</Link> </li>
                <li className='py-4 px-lg-4 px-md-3 px-1 border-end border-secondary'> <Link to="/contact">Contact Us</Link></li>
                <li className='py-4 px-lg-4 px-md-3  px-1 '>  <Link to="/mission">Our Mission</Link></li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Menu