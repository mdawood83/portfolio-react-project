import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Mina Dawood
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
