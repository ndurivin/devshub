import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <div >
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Devshub</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/devcard" className="nav-link">Devs</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Admin</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search by technology stack" aria-label="Search"/>
              <button className="btn btn-outline-alert" type="submit">Search </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
