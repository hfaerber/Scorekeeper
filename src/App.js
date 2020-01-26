import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import PlayerContainer from './PlayerContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scorekeeper</h1>
      </header>
      <Form />
      <PlayerContainer />
    </div>
  );
}

export default App;
