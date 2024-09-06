import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Footer, Header} from './Templates';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <div class="header_spacer"></div>
        <Routes>
          <Route path='/' element={<HomePage/>}exact/>
          <Route path='/FavList' element={<FavList/>}exact/>
          <Route path='/Login' element={<Login/>}exact/>
          <Route path='/ProductWall' element={<ProductWall/>}exact/>
          <Route path='/ProductSell' element={<ProductSell/>}exact/>
          <Route path='/Register' element={<Register/>}exact/>
          <Route path='/ShopCart' element={<ShopCart/>}exact/>
          <Route path='/UserInfo' element={<UserInfo/>}exact/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
