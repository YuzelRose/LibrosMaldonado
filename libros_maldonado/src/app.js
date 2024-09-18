import React, { useState } from 'react';
import './index.css';
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo, Autor } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Templates';

export default function App() {
  const [user, setUSer] = useState([]);

  return (
    <BrowserRouter>
      <Header user={user} setUSer={setUSer} /> /*listo*/
      <Routes>
        <Route path='/' element={<HomePage />} exact /> /*listo*/
        <Route path='/Writer' element={<Autor />} exact />
        <Route path='/FavList' element={<FavList />} exact /> 
        <Route path='/Login' element={<Login setUSer={setUSer} />} exact /> /*listo*/
        <Route path='/Wall' element={<ProductWall />} exact /> 
        <Route path='/ProductSell' element={<ProductSell />} exact />
        <Route path='/Register' element={<Register setUSer={setUSer} />} exact /> /*listo*/
        <Route path='/ShopCart' element={<ShopCart />} exact />
        <Route path='/UserInfo' element={<UserInfo />} exact />
      </Routes>
      <Footer /> /*listo*/
    </BrowserRouter>
  );
}