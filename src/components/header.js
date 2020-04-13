import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOutUser } from '../modules/user';

import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const pages = [{name: 'Логин', url: 'login'},{name: 'Регистрация', url: 'register'},{name: 'Карта', url: 'map'},{name: 'Профиль', url: 'profile'}];


const Header = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.user.isAuthed);
  const handleclick = e =>{
    dispatch(logOutUser());
  }
  if (isAuthed) {
    return (
      <header>
          <div className="headerContent">
            <div className="logo">
              <Logo />
            </div>
            <div className="menu">
              <Link to="/map">
                <Button>Карта</Button>
              </Link>
              <Link to="/profile">
                <Button>Профиль</Button>
              </Link>
              <Button onClick={handleclick}>Выход</Button>
            </div>
          </div>
      </header>
    );
  } else return null;
};


export default Header;