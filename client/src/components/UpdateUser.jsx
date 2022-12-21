import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState(useParams);
  useEffect(() => {
    axios.get("http://localhost:5000/users/" + id.id).then((res) => {
      setName(res.data.name);
      setRole(res.data.role);
    });
  }, [id.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      role: role,
    };
    console.log(user);

    axios
      .post("http://localhost:5000/users/update/" + id.id, user)
      .then((res) => console.log(res));
    window.location.href = "/";
  };
  return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={handleSubmit}>
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
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
