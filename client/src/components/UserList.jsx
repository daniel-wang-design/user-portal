import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserList.css";

export default class UserLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((res) => {
      this.setState({
        users: res.data.map((user) => user),
      });
    });
  }
  async deleteUser(id) {
    await axios
      .delete("http://localhost:5000/users/delete/" + id)
      .then((res) => console.log(res.data));
    this.componentDidMount();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container mt-5 px-2">
          <h3>User List</h3>
          <div className="position-relative">
            <span className="position-absolute search">
              <i className="fa fa-search"></i>
            </span>
            <input
              className="form-control w-100"
              placeholder="Search by name"
            />
          </div>
          <div className="table-responsive">
            <table className="table table-responsive table-borderless">
              <thead className="thead-light">
                <tr className="bg-light">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => {
                  return <this.UserItem key={user.id} user={user} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  UserItem = ({ user }) => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <Link to={"/edit/" + user._id}>edit</Link> |{" "}
          <Link onClick={() => this.deleteUser(user._id)}>delete</Link>
        </td>
      </tr>
    );
  };
}
