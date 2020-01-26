import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [playerName, setPlayerName] = useState('');

  return(
    <form>
      <input type='text' value={playerName} name='playerName'
        placeholder='Enter player name...'
        onChange={(event) => setPlayerName(event.target.value)}/>
      <button type='button' >Submit</button>
    </form>
  )
}
export default Form;
