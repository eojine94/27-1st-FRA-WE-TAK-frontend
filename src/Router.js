import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list-chicken" element={<List productName="chicken" />} />
        <Route
          path="/list-dinosaur"
          element={<List productName="dinosaur" />}
        />
        <Route
          path="/detail-fertilizedEgg"
          element={<Detail productName="chicken" category="fertilizedEgg" />}
        />
        <Route
          path="/detail-elvanStoneEgg"
          element={<Detail productName="chicken" category="elvanStoneEgg" />}
        />
        <Route
          path="/detail-chlorellaEgg"
          element={<Detail productName="chicken" category="chlorellaEggs" />}
        />
        <Route
          path="/detail-blueEgg"
          element={<Detail productName="chicken" category="blueEgg" />}
        />
        <Route
          path="/detail-baldHeadEgg"
          element={<Detail productName="chicken" category="baldHeadEgg" />}
        />
        <Route
          path="/detail-cretaceous"
          element={<Detail productName="dinosaur" category="cretaceous" />}
        />
        <Route
          path="/detail-neolithic"
          element={<Detail productName="dinosaur" category="neolithic" />}
        />
        <Route
          path="/detail-paleolithic"
          element={<Detail productName="dinosaur" category="paleolithic" />}
        />
        <Route
          path="/detail-mesolithic"
          element={<Detail productName="dinosaur" category="mesolithic" />}
        />
        <Route
          path="/detail-pocketMonster"
          element={<Detail productName="dinosaur" category="pocketMonster" />}
        />
        <Route
          path="/detail-digimon"
          element={<Detail productName="dinosaur" category="digimon" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
