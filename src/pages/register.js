import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';

import { signUpUser } from '../modules/user';

import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const RegisterPage = () => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.user.isAuthed);
  const error = useSelector(state => state.user.error);

  const handleSubmit = e => {
    e.preventDefault();

    if (loginInput && passwordInput) {
      dispatch(signUpUser({
        email: loginInput,
        password: passwordInput,
        name: nameInput,
        surname: surnameInput
      }));
    }
  };

  useEffect(() => { 
    if (isAuthed) {history.push('/map')} 
  }, [isAuthed]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'loginInput':
        setLoginInput(e.target.value);
        break;
      case 'passwordInput':
        setPasswordInput(e.target.value);
        break;
      case 'nameInput':
        setNameInput(e.target.value);
        break;
      case 'surnameInput':
        setSurnameInput(e.target.value);
        break;
      default:
    }
  };
  
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
                  <h2>Регистрация</h2>
                  {isAuthed ? (
                   <p>lol</p>
                ) : (
                  <>
                    <p>
                      Уже зарегистрирован?{' '}
                      <Link to="/" className="link">
                        Войти
                      </Link>
                    </p>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="line">
                      <TextField
                        label="Электронная почта"
                        type="email"
                        name="loginInput"
                        value={loginInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="line">
                      <TextField
                        label="Имя"
                        type="text"
                        name="nameInput"
                        value={nameInput}
                        onChange={handleChange}
                        required
                      />
                      </div>
                      <div className="line">
                      <TextField
                        label="Фамилия"
                        type="text"
                        name="surnameInput"
                        value={surnameInput}
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
                      <Button type="submit">Зарегистрироваться</Button>
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


export default RegisterPage;