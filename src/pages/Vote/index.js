import React, { useContext } from 'react';
import { VotesContext } from '../../Context/voteListContext';

function Vote() {
  const { votes, addVote } = useContext(VotesContext);

  return (
    <>
      <header className="App-header">
        <h2>
          A nota de 200 reais foi lançada mais ainda podemos mudar o Brasil
        </h2>
        <img src="https://i0.wp.com/sorocabanices.com.br/wp-content/uploads/2020/07/PhotoGrid_1596056764087.jpg?fit=1921%2C1080&ssl=1"
          alt="nota de 200"
          width="300" height="150" />
      </header>

      <main className="App-content">
        <p>Quem faz parte dessa família:</p>
        {votes.map(user => (
          <li key={user}>{user}</li>
        ))}
      </main>

      <p>Você deseja ajudar o Brasil a ser um país mais representativo?</p>
      <button>Não</button>
      <button onClick={addVote}>Sim</button>
    </>
  );
}

export default Vote;