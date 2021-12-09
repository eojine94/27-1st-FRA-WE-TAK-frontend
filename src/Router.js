import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/Signup';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list/:main_category_name" element={<List />} />
        <Route path="/detail/:product_id" element={<Detail />} />
        <Route path="my-page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
