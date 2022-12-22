import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";
import Home from "./components/Home";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
