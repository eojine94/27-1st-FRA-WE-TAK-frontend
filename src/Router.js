import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/Signup';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import FindId from './pages/FindId/FindId';
import FindPassword from './pages/FindPassword/FindPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import PrintEmail from './pages/PrintEmail/PrintEmail';
import MyPage from './pages/MyPage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find-id" element={<FindId />} />
        <Route path="/list/:main_category_name" element={<List />} />
        <Route path="/detail/:product_id" element={<Detail />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/print-email" element={<PrintEmail />} />
        <Route path="my-page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
