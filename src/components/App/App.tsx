import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LOGIN_LINK, MAIN_LINK } from '../../utils/links';
import Login from '../../Pages/Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../../Pages/Main/Main';

export default function App() {
  const location = useLocation()
  return (
    <main>
      <Routes location={location}>
        <Route path={MAIN_LINK} element={<ProtectedRoute notAuthRedirect={LOGIN_LINK}><Main/></ProtectedRoute>} />
        <Route path={LOGIN_LINK} element={<Login />} />
      </Routes>
    </main>
  );
}
