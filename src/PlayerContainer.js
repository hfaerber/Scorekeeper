import React, { useState } from 'react';
import './PlayerContainer.css';
import PlayerCard from './PlayerCard';

const PlayerContainer = () => {
  const [players, setPlayers] = useState([
    { name: 'JimJames',
      tagline: 'Read the Bible!'},
    { name: 'Brittany',
      tagline: 'Ah-range'}
  ])

  const playersForCards = players.map(player => {
      return <PlayerCard
      key={player.name}
      name={player.name}
      tagline={player.tagline}
    />
  })

  return(
    <main className='main'>
      {playersForCards}
    </main>
  )
}

export default PlayerContainer;
