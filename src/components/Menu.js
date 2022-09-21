import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';



function Menu() {


  // onClick={handleClick = () => { navLink.style.color === "background-color:  rgb(61, 94, 62)" ? navLink.classList.add("active") : navLink.style.color === "background-color:  rgb(61, 94, 62)" }}
  return (
    <>
      <nav>
        <div className="row menu-row">
          <div className="col menu-col text-center d-sm-flex justify-content-sm-center">
            <ul className='py-sm-4 py-2' id='menu_list'>
              <li className='d-inline py-sm-5 py-3' > <Link className='link text-decoration-none py-5 text-white px-sm-4 px-2 navLink active  ' to="/" >About US</Link> </li>
              <li className='d-inline py-sm-5 py-3' > <Link className='link text-decoration-none py-5 text-white px-sm-4 px-2  navLink' to="/contact" >Contact</Link> </li>
              <li className='d-inline py-sm-5 py-3'> <Link className='link text-decoration-none py-5 text-white px-sm-4 px-2 navLink' to="mission" >Our Mission</Link> </li>
              {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item className='navitem py-3 px-lg-4 px-md-3 px-1 border-end border-start border-secondary text-center'>
                  <Link to="/" className='link text-decoration-none'> <Nav.Link className='navlink ' to="/">About Us</Nav.Link></Link>
                </Nav.Item>

                <Nav.Item className='navitem py-3 px-lg-4 px-md-3 px-1 border-end border-secondary text-center'>
                  <Link to="/contact" className='text-decoration-none'>  <Nav.Link className=' navlink' eventKey="link-1">Contact Us</Nav.Link></Link>
                </Nav.Item>

                <Nav.Item className='navitem py-3 px-lg-4 px-md-3 px-1 border-end border-secondary text-center'>
                  <Link to="/mission" className='text-decoration-none' > <Nav.Link className='navlink' eventKey="link-2">
                    Our Mission
                  </Nav.Link></Link>
                </Nav.Item>
              </Nav> */}
            </ul>
          </div>
        </div >
      </nav >
    </>
  )

}

export default Menu
