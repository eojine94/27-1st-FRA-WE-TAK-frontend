import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import List from './pages/List/List';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list-chicken" element={<List productName="chicken" />} />
        <Route
          path="/list-dinosaur"
          element={<List productName="dinosaur" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
