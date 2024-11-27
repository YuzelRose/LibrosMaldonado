import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { HomePage, ProductSell, Login, FavList, ProductWall, Register, ShopCart, UserInfo, Autor, Faq, AutorWall, NewUser, AlterUser, PayRequirements } from "./pages";
import AdminRoutes from "./admin/AdminRoutes.js";
import { Footer, Header } from "./Templates";
import { AuthProvider, useAuth } from "./backend/utils/AuthContext";
import ScrollToTop from "./backend/utils/scrollTop";

function AppContent() {
  const location = useLocation();
  const { setAuthUser, setIsLogged, setAuthUserName } = useAuth();

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('LibMal/keep'));
    if (session) {
      setAuthUser(session.AuthUser);
      setIsLogged(session.IsLogged);
      setAuthUserName(session.AuthUserName);
    }
}, []);

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Register" element={<Register />} exact />
        <Route path="/ShopCart" element={<ShopCart />} exact />

        <Route path="/ShopCart/PayRequirements" element={<PayRequirements />} exact />

        <Route path="/FavList" element={<FavList />} exact />
        <Route path="/ProductWall" element={<ProductWall />} exact />
        <Route path="/ProductWall/:data" element={<ProductWall />} exact />
        <Route path="/AutorWall" element={<AutorWall />} exact />
        <Route path="/AutorWall/:data" element={<AutorWall />} exact />
        <Route path="/ProductSell/:id" element={<ProductSell />} exact />
        <Route path="/AutorInfo/:Name" element={<Autor />} exact />
        <Route path="/UserInfo" element={<UserInfo />} exact />
        <Route path="/Faq" element={<Faq />} exact />
        <Route path="/Faq/:sect" element={<Faq />} exact />
        <Route path="/NewUser/:key" element={<NewUser />} exact />
        <Route path="/AlterUser/:url" element={<AlterUser />} exact />

        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

/*
faltan:
  HomePage 90% falta un componente
  Faq 70% Falta rellenar metodos de entrega

servicios:
  sistema de venta 90% solo falta conexion a base
*/