import React from 'react';
import PropTypes from 'prop-types';
import { AuthConsumer } from './auth';
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const pages = [{name: 'Логин', url: 'login'},{name: 'Регистрация', url: 'register'},{name: 'Карта', url: 'map'},{name: 'Профиль', url: 'profile'}];


const Header = ({ setPage }) => {


  return (
    <AuthConsumer>
      {({ isLoggedIn, logout }) => {
        if (isLoggedIn)
          return (
            <header>
                <div className="headerContent">
                  <div className="logo">
                    <Logo />
                  </div>
                  <div className="menu">
                    {pages.map(page => {
                      if(page.url!=='login'){
                        return <Button onClick={() => setPage(page.url)} key={page.url}>{page.name}</Button>
                      }
                      return null
                    })}
                    <Button
                      onClick={() => {
                        logout();
                        setPage('login');
                      }}
                    >
                      Выход
                    </Button>
                  </div>
                </div>
            </header>
          );
      }}
    </AuthConsumer>
  );
};

Header.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default Header;