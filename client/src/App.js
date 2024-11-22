import React from 'react';
import './index.css';
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo, Autor, Faq, AutorWall, NewUser, AlterUser } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Templates';
import { AuthProvider } from './backend/utils/AuthContext';
import ScrollToTop from './backend/utils/scrollTop';

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} exact /> 
          <Route path='/Login' element={<Login />} exact /> 
          <Route path='/Register' element={<Register />} exact /> 
          <Route path='/ShopCart' element={<ShopCart />} exact /> 
          <Route path='/FavList' element={<FavList />} exact /> 
          <Route path='/ProductWall' element={<ProductWall />} exact /> 
          <Route path='/ProductWall/:data' element={<ProductWall />} exact /> 
          <Route path='/AutorWall' element={<AutorWall />} exact /> 
          <Route path='/AutorWall/:data' element={<AutorWall />} exact /> 
          <Route path='/ProductSell/:id' element={<ProductSell />} exact /> 
          <Route path='/AutorInfo/:Name' element={<Autor />} exact /> 
          <Route path='/UserInfo' element={<UserInfo />} exact /> 
          <Route path='/Faq' element={<Faq />} exact /> 
          <Route path='/Faq/:sect' element={<Faq />} exact /> 
          
          <Route path='/NewUser/:key' element={<NewUser />} exact /> 
          <Route path='/AlterUser/:url' element={<AlterUser />} exact />
          
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </AuthProvider>
    
  );
}

/*
faltan:
  HomePage 90% falta un componente
  ProductWall 50% funcionalidad del filtro
  UserInfo 90%
  AlterUser 90%
  Faq 70% Falta rellenar metodos de entrega

servicios:
  Filtro de libros/escritores
  Cambio de datos del usuario 66%
  sistema de venta + costos en descuento
*/