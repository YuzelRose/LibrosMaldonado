import React from 'react';
import './index.css';
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo, Autor, Faq } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Templates';
import { AuthProvider } from './backend/utils/AuthContext';
import ScrollToTop from './backend/utils/scrollTop';

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header /> {/*100%*/}
        <Routes>
          <Route path='/' element={<HomePage />} exact /> {/*90% falta un componente*/}
          <Route path='/Login' element={<Login />} exact /> {/*100%*/}
          <Route path='/Register' element={<Register />} exact /> {/*100%*/}
          <Route path='/ShopCart' element={<ShopCart />} exact /> {/*100%*/}
          <Route path='/FavList' element={<FavList />} exact /> {/*100%*/}
          <Route path='/ProductWall' element={<ProductWall />} exact /> {/*100%*/} 
          <Route path='/ProductWall/:data' element={<ProductWall />} exact /> {/*50% funcionalidad del filtro*/} 
          <Route path='/ProductSell/:id' element={<ProductSell />} exact /> {/*100%*/}
          <Route path='/AutorInfo/:Name' element={<Autor />} exact /> {/*100%*/}
          <Route path='/UserInfo' element={<UserInfo />} exact /> {/*0%*/}
          <Route path='/Faq' element={<Faq />} exact /> {/*70% Falta rellenar metodos de entrega*/}
          <Route path='/Faq/:sect' element={<Faq />} exact /> {/*100%*/}
        </Routes>
        <Footer /> {/*80% haz que el register mail funcione*/}
      </BrowserRouter>
    </AuthProvider>
    
  );
}


/*
faltan:
  HomePage 90% falta un componente
  ProductWall 50% funcionalidad del filtro
  UserInfo 0%
  Faq 70% Falta rellenar metodos de entrega
  Footer 80% haz que el register mail funcione
*/