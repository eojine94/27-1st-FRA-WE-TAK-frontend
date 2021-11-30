import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ListChicken from './pages/List/ListChicken';
import ListDinosaur from './pages/List/ListDinosaur';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list-chicken" element={<ListChicken />} />
        <Route path="/list-dinosaur" element={<ListDinosaur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
