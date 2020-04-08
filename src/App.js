  
import React, { useState } from 'react';
import './App.css';
import { AuthProvider } from './elements/auth';
import Header from './elements/header';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MapPage from './pages/map';
import ProfilePage from './pages/profile';

const App = () => {
  const [page, setPage] = useState('login');

  return (
    <AuthProvider>
      <div className="app">
        <Header setPage={setPage} />
        {
          {
            login: <LoginPage setPage={setPage} />,
            register: <RegisterPage setPage={setPage} />,
            map: <MapPage />,
            profile: <ProfilePage />
          }[page]
        }
      </div>
    </AuthProvider>
  );
};

export default App;