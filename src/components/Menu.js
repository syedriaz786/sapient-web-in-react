import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function Menu() {



  return (
    <>
      <nav>
        <div className="row menu-row">
          <div className="col menu-col text-center d-sm-flex justify-content-sm-center">
            <ul className='' id='menu_list'>
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item className='navitem py-3 px-lg-4 px-md-3 px-1 border-end border-start border-secondary text-center'>
                  <Link to="/" className='link text-decoration-none'> <Nav.Link className='navlink ' href="/home">About Us</Nav.Link></Link>
                </Nav.Item>

                <Nav.Item className='navitem py-3 px-lg-4 px-md-3 px-1 border-end border-secondary text-center'>
                  <Link to="/contact" className='text-decoration-none'>  <Nav.Link className=' navlink' eventKey="link-1">Contact Us</Nav.Link></Link>
                </Nav.Item>

                <Nav.Item className='navitem py-3 px-lg-4 px-md-3 px-1 border-end border-secondary text-center'>
                  <Link to="/mission" className='text-decoration-none' > <Nav.Link className='navlink' eventKey="link-2">
                    Our Mission
                  </Nav.Link></Link>
                </Nav.Item>
              </Nav>
            </ul>
          </div>
        </div >
      </nav >
    </>
  )

}

export default Menu
