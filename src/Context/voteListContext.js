import React, { useState, createContext, useContext } from 'react';
import { AuthContext } from './authContext';

const VotesContext = createContext();

function VotesContextProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [votes, setVotes] = useState([
    "Fernando",
    "Fulano",
    "Sicrano",
    "Beutrano",
  ]);

  function addVote() {
    setVotes([...votes, user]);
  }

  return (
    <VotesContext.Provider value={{ votes, addVote }}>
      {children}
    </VotesContext.Provider>
  );
}

export { VotesContext, VotesContextProvider };