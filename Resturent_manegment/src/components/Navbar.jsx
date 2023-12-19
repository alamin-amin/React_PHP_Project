import React from 'react'
import { Link } from "react-router-dom"
import navbarCss from '../components/Navbar.css'


function Navbar() {
  let navlogo = {
    width: '70px',
    paddingLeft: '13px',
    borderRadius: '50%',
    paddingBottom :'9px'
  }
  return (
    <div className='row ' style={{ height: '90px', background: "rgb(0, 7, 61)" }}>
      <div className='col-2 d-flex' style={{ paddingLft: '12px' }}>
        <img style={navlogo} src="src/assets/images/logo1.png" alt="" />
        <p className='text-white pt-5 ps-2' style={{ fontSize: '24px',}}>FooDBoX</p>
      </div>
      <div className='col-7 pt-2'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse fs-4" id="navbarSupportedContent px-4">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='' className="nav-link active text-white" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='order' className="nav-link text-white">Order</Link>
                </li>
                <li className="nav-item">
                  <Link to='menu' className="nav-link text-white">Menu</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">New Arrival</a>
                </li>
                <li className="nav-item">
                  <Link to='location' className="nav-link text-white"> Location </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className='col-3 d-flex fs-5'>
        <div className='ps-6' style={{ color: 'white', paddingTop: '26px' }}>
          <a style={{ padding: '12px', color: 'green', }} href='#'><i className="fa-brands fa-facebook"></i></a>
          <a href='#'><i className="fa-brands fa-google"></i></a>
          <a style={{ padding: '12px' }} href='#'><i className="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className='ms-4 pt-4'>
          <Link className='text-white' style={{ textDecoration: 'none', fontSize: '17px' }} to="SideBar">Admin /</Link>
          <a className='text-white' style={{ textDecoration: 'none', fontSize: '17px' }} href="#"> Registetion</a>
        </div>
            {/* <div className='text-white pt-3 fs-4 '>
            <ul className="nav_profile">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    oneFire
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                    <li><a className="dropdown-item" href="#">Manage Account</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <a className="dropdown-item" href="#">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="user_part">
                <img style={{width: "40px"}} className="" src="images/rlogo.png" alt="avatar"/>
              </div>
              </div> */}
      </div>
    </div>
  )
}

export default Navbar