import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import PlayerContainer from './PlayerContainer';

function App() {
  const [players, setPlayers] = useState([
    { name: 'JimJames',
      tagline: 'Read the Bible!'},
    { name: 'Brittany',
      tagline: 'Ah-range'}
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scorekeeper</h1>
      </header>
      <Form
        players={players}
        setPlayers={setPlayers}
      />
      <PlayerContainer
        players={players}
        setPlayers={setPlayers}
      />
    </div>
  );
}

export default App;
