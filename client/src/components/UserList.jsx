import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div>
        <h3>User List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return <this.UserItem key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
  UserItem = ({ user }) => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>
          <Link to={"/edit/" + user._id}>edit</Link> |{" "}
          <Link onClick={() => this.deleteUser(user._id)}>delete</Link>
        </td>
      </tr>
    );
  };
}
