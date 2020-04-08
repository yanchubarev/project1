import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();


const Auth = props => {
  const [isLoggedIn, setLogged] = useState(false);


  const login = (email, password) => {
    setLogged(true);
  };


  const logout = () => {
    setLogged(false);
  };


  return (
    <Provider
      value={{
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
      }}
    >
      {props.children}
    </Provider>
  );
};


export { Auth as AuthProvider, Consumer as AuthConsumer };