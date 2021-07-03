import React from "react";
import './Header.css';
import { Link as L } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-sticky bg-dark">
      <div className="container container-fluid">
        <L className="navbar-brand " to="#">
          <h3 className="font-weight-bold">UPTECH ADMIN</h3>
        </L>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarColor02"
        >
          <ul className="navbar-nav me-auto">
            {/* <li className="nav-item">
              <L className="nav-link active" to="#">
                Home
              </L>
            </li> */}

            <li className="nav-item dropdown">
              <L
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <SettingsIcon/>
              </L>
              <div className="dropdown-menu">
                <L className="dropdown-item" to="#">
                  Log In
                </L>
                <L className="dropdown-item" to="#">
                  Another action
                </L>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
