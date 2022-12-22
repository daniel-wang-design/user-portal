import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <img className="navbar-brand" src={logo} alt="..." height="36" />
          <Link to="/" className="navbar-brand">
            FOCUS Youth Tutoring Portal
          </Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/list" className="nav-link">
                  Tutor List
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create new User
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/schedule" className="nav-link">
                  My schedule
                </Link>
              </li>{" "}
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Log-In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
