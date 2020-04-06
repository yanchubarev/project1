import React from 'react';
import { useState } from 'react';

const RegisterPage = (props) => {
  const [userInfo, setInfo] = useState('');
  const tempvalues = {
    loginInput:'',
    passwordInput:'',
    nameInput:'',
    surnameInput:''
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.toPage('map');
  };

  const handleChange = e => {
    tempvalues[e.target.name]=e.target.value;
    setInfo(tempvalues);
  };

    const { loginInput, passwordInput, nameInput, surnameInput } = {userInfo};

    return (
      <div className="page pageRegister">
        <h1>Регистрация</h1>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Имя: </label>
            <input
              type="text"
              name="nameInput"
              value={nameInput}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Фамилия: </label>
            <input
              type="text"
              name="surnameInput"
              value={surnameInput}
              onChange={handleChange}
            />
          </div>

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
            <input type="submit" value="Регистрация" />
          </div>
        </form>

      </div>
    );
}

export default RegisterPage;
