import React, { useState, createContext } from 'react';
import history from '../history';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState('');

  function handleLogin(user) {
    setUser(user);
    history.push('/vote');
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };