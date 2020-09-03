import React, { useState, useContext } from 'react';

import { AuthContext } from '../../Context/authContext';
import './login.css';

function Login() {
  const [state, setState] = useState('');
  const { handleLogin } = useContext(AuthContext);

  return (
    <div className='content'>
      <input type="text" placeholder="Seu nome"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        onClick={() => handleLogin(state)}
      >Sing in</button>
    </div>
  );
}

export default Login;