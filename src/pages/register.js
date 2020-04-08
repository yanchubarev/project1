import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

class RegisterPage extends React.Component {
  state = {
    loginInput: '',
    passwordInput: '',
    nameInput: '',
    surnameInput: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { loginInput, passwordInput, nameInput, surnameInput } = this.state;

    
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    const { loginInput, passwordInput, nameInput, surnameInput } = this.state;
    const { setPage } = this.props;

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
                  <p>
                    Уже зарегистрирован?{' '}
                    <span className="link" onClick={() => setPage('login')}>
                      Войти
                    </span>
                  </p>
                  <form onSubmit={this.handleSubmit} className="form">
                    <div className="line">
                      <TextField
                        label="Электронная почта"
                        type="email"
                        name="loginInput"
                        value={loginInput}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="line">
                      <TextField
                        label="Имя"
                        type="text"
                        name="nameInput"
                        value={nameInput}
                        onChange={this.handleChange}
                        required
                      />
                      </div>
                      <div className="line">
                      <TextField
                        label="Фамилия"
                        type="text"
                        name="surnameInput"
                        value={surnameInput}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="line">
                      <TextField
                        label="Пароль"
                        type="password"
                        name="passwordInput"
                        value={passwordInput}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="line textRight">
                      <Button type="submit">Зарегистрироваться</Button>
                    </div>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    );
  };
}

RegisterPage.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default RegisterPage;