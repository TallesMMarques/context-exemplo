import React from 'react';
import './App.css';
import RoutesFunction from './routes';
import { AuthContextProvider } from './Context/authContext'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <RoutesFunction />
      </div>
    </AuthContextProvider>
  );
}

export default App;
