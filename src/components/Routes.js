import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback, } from '@okta/okta-react';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import RequiredAuth from './RequiredAuth';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RequiredAuth />}>
        <Route path="" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" />
      </Route>
      <Route path="login/callback" element={<LoginCallback />} />
    </Routes>
  );
};

export default AppRoutes;
