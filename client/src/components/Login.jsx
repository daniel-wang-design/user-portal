import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successfulCreate, setSuccessfulCreate] = useState(false);
  const [succesLogin, setSuccessLogin] = useState("none");

  const changeAuthMode = () => {
    setValidEmail(true);
    setValidName(true);
    setValidPassword(true);
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setValidEmail(true);
    setValidPassword(true);
    if (!email.match(validRegex)) {
      setValidEmail(false);
      return;
    }
    if (password.length === 0) {
      setValidPassword(false);
      return;
    }
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    setLoading(true);
    validateUser(user);
  };
  async function validateUser(user) {
    await axios
      .post("http://localhost:5000/login/", user)
      .then((res) => {
        if (res.status === 200) {
          setSuccessLogin("good");
        }
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          setSuccessLogin("bad");
        }
      });
    setLoading(false);
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setValidEmail(true);
    setValidName(true);
    setValidPassword(true);
    if (name.length < 3) {
      setValidName(false);
      return;
    }
    if (!email.match(validRegex)) {
      setValidEmail(false);
      return;
    }
    if (password.length < 8) {
      setValidPassword(false);
      return;
    }

    const user = {
      email: email,
      password: password,
      name: name,
      role: document.getElementById("role-select").value,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        if (res.status === 200) {
          setSuccessfulCreate(false);
        } else {
          setSuccessfulCreate(true);
        }
      })
      .catch((err) => setSuccessfulCreate(true));
    console.log(user);
  };

  if (authMode === "signin") {
    return (
      <div className="wrapper">
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-danger" hidden={validEmail}>
                  Please enter a valid email
                </p>
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-danger" hidden={validPassword}>
                  Please enter a password
                </p>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmitSignIn}
                >
                  {loading ? "Loading" : "Submit"}
                </button>
                <p
                  className="text-danger"
                  hidden={succesLogin === "bad" ? false : true}
                >
                  Wrong email or password
                </p>
                <p
                  className="text-success"
                  hidden={succesLogin === "good" ? false : true}
                >
                  Logged in!
                </p>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  // sign up form

  // CREATE FORM VALIDATION FOR MAKING NEW USER
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="string"
              className="form-control mt-1"
              placeholder="Legal or preferred"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-danger" hidden={validName}>
              Please enter your full name
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-danger" hidden={validEmail}>
              Please enter a valid email
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <p className="text-danger" hidden={validPassword}>
              Please enter a password at least 8 letters long
            </p>
          </div>
          <div className="form-group mt-3">
            <label>I am a:</label>
            <select
              className="form-select"
              id="role-select"
              defaultValue="Student"
            >
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitRegister}
            >
              Submit
            </button>
            <p></p>
            <p className="text-danger" hidden={!successfulCreate}>
              Something went wrong, please contact us for assistance.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
