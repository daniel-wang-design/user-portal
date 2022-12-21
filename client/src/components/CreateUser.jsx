import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      role: "",
    };
  }
  componentDidMount() {
    this.setState({});
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      role: this.state.role,
    };
    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res));

    this.setState({
      name: "",
      role: "",
    });
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              className="form-control"
              value={this.state.role}
              onChange={this.onChangeRole}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
