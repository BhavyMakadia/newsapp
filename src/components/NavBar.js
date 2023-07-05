// Import necessary modules
import React from 'react';
import { Link } from "react-router-dom";

// Define the NavBar component
const NavBar = () => {

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand logo */}
          <Link className="navbar-brand" to="/">News Grow</Link>

          {/* Navbar toggler button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home link */}
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>

              {/* Other category links */}
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
// Export the NavBar component as default
export default NavBar;
