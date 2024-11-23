import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ManageUsers, ManageBooks, GetPermit, DashBord } from './pages/index.js'; 
import { AuthProvider } from './utils/PermitAuth.js'; 
import PermitRoute from './utils/PermitRoure.js';

export default function AdminRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/get-permision" element={<GetPermit />} exact />
        
        <Route path="/get-permision/response/:tok" element={<GetPermit />} exact />
        
        <Route path="/DashBord" element={
          <PermitRoute>
            <DashBord />          
          </PermitRoute>
        } exact />
        
        <Route path="/DashBord/users" element={
          <PermitRoute>
            <ManageUsers />          
          </PermitRoute>
        } exact />
        
        <Route path="/DashBord/books" element={
          <PermitRoute>
            <ManageBooks />
          </PermitRoute>
        } exact />
        
        <Route path="*" element={<Navigate to="/get-permision" />} />
      </Routes>
    </AuthProvider>
  );
}