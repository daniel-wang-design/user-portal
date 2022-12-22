import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./CreateUser.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showUser, setShowUser] = useState(false);
  const [failed, setFailed] = useState(false);
  const [role, setRole] = useState("Student");

  const onSubmit = (e) => {
    e.preventDefault();
    setRole(document.getElementById("role-select").value);
    const user = {
      name: name,
      role: document.getElementById("role-select").value,
      email: email,
      password: password,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        if (res.status === 200) {
          setShowUser(true);
          setFailed(false);
        }
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          setShowUser(false);
          setFailed(true);
        }
      });
  };
  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setShowUser(false);
    setFailed(false);
  };
  return (
    <div className="container mt-4">
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control border-[2px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            className="form-select"
            id="role-select"
            defaultValue="Student"
          >
            <option value="Student">Student</option>
            <option value="Tutor">Tutor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <br />
        <div className="form-group" hidden={showUser}>
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
      <div hidden={!showUser}>
        <br />
        <h5>New user was created: </h5>
        <br />
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Email: </b>
          {email}
        </p>
        <p>
          <b>Password: </b>
          {password}
        </p>
        <p>
          <b>Role: </b>
          {role}
        </p>
        <div className="form-group">
          <input
            value="Create another user"
            onClick={reset}
            className="btn btn-primary"
          />
        </div>
      </div>
      <div hidden={!failed}>
        <br />
        <p className="text-danger">Something went wrong...</p>
      </div>
    </div>
  );
};

export default CreateUser;
