import React, { useContext } from 'react';
import { VotesContext } from '../../Context/voteListContext';

function Agradecimento() {
  const { votes } = useContext(VotesContext);

  return (
    <p>
      Obridado {votes.join(', ')} e todos que estão lutando por um país melhor!!!
    </p>
  );
}

export default Agradecimento;