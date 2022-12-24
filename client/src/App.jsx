import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/schedule"
          element={
            <RequireAuth loginPath="/login">
              <Schedule />
            </RequireAuth>
          }
        />
        <Route
          path="/list"
          element={
            <RequireAuth loginPath="/login">
              <UserList />
            </RequireAuth>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <RequireAuth loginPath="/login">
              <UpdateUser />
            </RequireAuth>
          }
        />
        <Route
          path="/create"
          element={
            <RequireAuth loginPath="/login">
              <CreateUser />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
