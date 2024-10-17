import React, { useEffect, useState } from 'react';
import './index.css';
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo, Autor } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Templates';
import { AuthProvider } from './backend/utils/AuthContext';
import ScrollToTop from './backend/utils/scrollTop';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header /> {/*70%*/}
        <Routes>
          <Route path='/' element={<HomePage />} exact /> {/*90%*/}
          <Route path='/FavList' element={<FavList />} exact /> {/*100%*/}
          <Route path='/Login' element={<Login />} exact /> {/*100%*/}
          <Route path='/ProductSell/:id' element={<ProductSell />} exact /> {/*100%*/}
          <Route path='/Register' element={<Register />} exact /> {/*100%*/}
          <Route path='/ShopCart' element={<ShopCart />} exact /> {/*100%*/}
          <Route path='/ProductWall' element={<ProductWall />} exact /> {/*70%*/} 
          <Route path='/AutorInfo/:Name' element={<Autor />} exact /> {/*90%*/}
          <Route path='/UserInfo' element={<UserInfo />} exact /> {/*0%*/}
          <Route path='/Faq' element={''} exact /> {/*0%*/}
          <Route path='/Abaut' element={<UserInfo />} exact /> {/*0%*/}
        </Routes>
        <Footer /> {/*99%*/}
      </BrowserRouter>
    </AuthProvider>
    
  );
}