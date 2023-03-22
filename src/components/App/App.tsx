import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LOGIN_LINK } from '../../utils/links';
import Login from '../../Pages/Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation()
  return (
    <main>
      <Routes location={location}>
        <Route path='/' element={<ProtectedRoute notAuthRedirect={LOGIN_LINK}><div>main</div></ProtectedRoute>} />
        <Route path={LOGIN_LINK} element={<Login />} />
        <Route path='*' element={<></>} />
      </Routes>
    </main>
  );
}

export default App;
