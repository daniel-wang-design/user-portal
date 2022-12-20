import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          User Portal
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Users List
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create new User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit/:id" className="nav-link">
                Update User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
