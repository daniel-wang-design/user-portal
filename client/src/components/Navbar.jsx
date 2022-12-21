import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          FOCUS Youth Tutoring User Portal
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
              <Link to="/" className="nav-link">
                My schedule
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
