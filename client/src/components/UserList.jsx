import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        users: res.data.map((user) => user.name),
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <div>
        <h3>User List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  <td>{user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
