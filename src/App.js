import React from 'react';
import { useState } from 'react';
import './App.css';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MapPage from './pages/map';
import ProfilePage from './pages/profile';

const pages = ['login', 'register', 'map', 'profile'];

const App = () => {
  const [page, setPage] = useState('login');
  const changePage = page => {
    setPage(page);
  }
  return(
    <div className="app">
      <header>
        <ul className="pageNav">
          {pages.map(page => (
            <li onClick={() => setPage(page)} key={page}>
              {page}
            </li>
          ))}
        </ul>
      </header>

      <section className="pageContent">
        {
          {
            login: <LoginPage toPage={changePage} />,
            register: <RegisterPage toPage={changePage} />,
            map: <MapPage />,
            profile: <ProfilePage />
          }[page]
        }
      </section>
    </div>
  );
}

export default App;
