import React, { useEffect, useState } from 'react';
import './index.css';
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo, Autor } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Templates';

export default function App() {
  const [user, setUSer] = useState([]);

  useEffect(() => {
    const userSessionXML = localStorage.getItem('userSession');
    if (userSessionXML) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");
      const userElement = xmlDoc.getElementsByTagName("User")[0];

      if (userElement) {
        const userEmail = userElement.getElementsByTagName("Email")[0].textContent;
        setUSer([userEmail]);
      }
    } 
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} setUSer={setUSer} /> 
      <Routes>
        <Route path='/' element={<HomePage />} exact /> 
        <Route path='/Writer' element={<Autor />} exact />
        <Route path='/FavList' element={<FavList setUSer={setUSer} />} exact /> 
        <Route path='/Login' element={<Login setUSer={setUSer} />} exact /> 
        <Route path='/ProductWall' element={<ProductWall />} exact /> 
        <Route path='/ProductSell/:id' element={<ProductSell setUSer={setUSer}/>} exact />
        <Route path='/Register' element={<Register setUSer={setUSer} />} exact /> 
        <Route path='/ShopCart' element={<ShopCart setUSer={setUSer} />} exact />
        <Route path='/UserInfo' element={<UserInfo />} exact />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}