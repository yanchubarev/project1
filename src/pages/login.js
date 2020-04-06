import React from 'react';
import { useState } from 'react';

const LoginPage = (props) => {
  const [userInfo, setInfo] = useState('');
  const tempvalues = {
    loginInput:'',
    passwordInput:''
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.toPage('map');
  };
  
  const handleChange = (e) => {
    tempvalues[e.target.name]=e.target.value;
    setInfo(tempvalues);
  };


  const { loginInput, passwordInput } = {userInfo};

    return (
      <div className="page pageLogin">
        <h1>Логин</h1>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Логин: </label>
            <input
              type="email"
              name="loginInput"
              value={loginInput}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Пароль: </label>
            <input
              type="password"
              name="passwordInput"
              value={passwordInput}
              onChange={handleChange}
            />
          </div>

          <div>
            <input type="submit" value="Войти" />
          </div>
        </form>

      </div>
    );
}

export default LoginPage;