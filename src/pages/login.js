import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { signInUser } from "../modules/user";
import Container from "@material-ui/core/container";
import Grid from "@material-ui/core/grid";
import TextField from "@material-ui/core/textfield";
import Button from "@material-ui/core/button";
import { Logo } from "loft-taxi-mui-theme";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.user.isAuthed);
  const error = useSelector((state) => state.user.error);
  /* const handleSubmit = e => {
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
  };*/
  useEffect(() => {
    if (isAuthed) {
      history.push("/map");
    }
  }, [isAuthed]);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    if (data.login && data.password) {
      dispatch(
        signInUser({
          email: data.login,
          password: data.password,
        })
      );
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
                <h2>Войти</h2>
                {isAuthed ? (
                  <p>lol</p>
                ) : (
                  <>
                    <p>
                      Новый пользователь?{" "}
                      <Link to="/register" className="link">
                        Зарегистрируйтесь
                      </Link>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                      <div className="line">
                        <input
                          label="Логин"
                          type="email"
                          name="login"
                          ref={register({ required: true })}
                        />
                      </div>
                      <div className="line">
                        <input
                          label="Пароль"
                          type="password"
                          name="password"
                          ref={register({ required: true })}
                        />
                      </div>
                      <div className="line textRight">
                        <button type="submit">Войти</button>
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
