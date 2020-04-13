  
import React,{ useState,useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/privateRoute';

import './css/App.css';

import Header from './components/header';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MapPage from './pages/map';
import ProfilePage from './pages/profile';

const App = () => {
  const isAuthed = useSelector(state => state.user.isAuthed);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/map" component={MapPage} isAuthed={isAuthed} />
        <PrivateRoute
          path="/profile"
          component={ProfilePage}
          isAuthed={isAuthed}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};



export default App;