import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import config from './okta/config';
import AppRoutes from './components/Routes';
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { Layout } from 'antd';
import SideMenu from './components/SideMenu';

const oktaAuth = new OktaAuth(config.oidc);
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <AppRoutes />
    </Security>
  );
};

export default App;

