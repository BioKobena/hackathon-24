import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import theme from './config/theme';
import AppHeader from './components/AppHeader';
import AppRoutes from './router/AppRoutes';
import SideNav from './components/SideNav';
import '../src/App.css'
import Login from './containers/Auth/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProSidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route index path='/login' element={<Login />} />
            <Route path='/*' element={<AuthenticatedApp />} />
          </Routes>
        </BrowserRouter>
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

function AuthenticatedApp() {
  return (
    <React.Fragment>
      <AppHeader />
      <div style={styles.container}>
        {/* <SideNav /> */}
        <div
          style={styles.mainSection}
        >
          <AppRoutes />
        </div>
      </div>
    </React.Fragment>
  );
}

const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
};

export default App;
