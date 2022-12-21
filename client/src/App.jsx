import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
