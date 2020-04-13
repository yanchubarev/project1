import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux'
import { signInUser } from '../modules/user';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.user.isAuthed);
  const error = useSelector(state => state.user.error);
  const handleSubmit = e => {
    e.preventDefault();

    if (loginInput && passwordInput) {
      dispatch(signInUser({
        email: loginInput,
        password: passwordInput
      }));
      
    }
  };
 
  const handleChange = e => {
    switch (e.target.name) {
      case 'loginInput':
        setLoginInput(e.target.value);
        break;
      case 'passwordInput':
        setPasswordInput(e.target.value);
        break;
      default:
    }
  };
  useEffect(() => { 
    if (isAuthed) {history.push('/map')} 
  }, [isAuthed])
  return (
      <section className="page">
        <div className="pageContent">
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className="logoWrap">
                  <Logo />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="whiteDiv">
                  <h2>Войти</h2>
                  {isAuthed ? ( <p>lol</p>) : (
                  <>
                  <p>
                    Новый пользователь?{' '}
                    <Link to="/register" className="link">
                        Зарегистрируйтесь
                      </Link>
                  </p>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="line">
                      <TextField
                        label="Логин"
                        type="email"
                        name="loginInput"
                        value={loginInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="line">
                      <TextField
                        label="Пароль"
                        type="password"
                        name="passwordInput"
                        value={passwordInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="line textRight">
                          <Button
                            type="submit"
                          >
                            Войти
                          </Button>
                    </div>
                    <div className="line">
                        <span className="error">{error}</span>
                      </div>
                  </form>
                  </>
                )}
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    );
  };

  
export default LoginPage;