import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./src/pages/Main/Main";
import Login from "./src/pages/Login/Login";
import Signup from "./src/pages/Signup/Signup";
import List from "./src/pages/List/List";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
