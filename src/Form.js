import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [playerName, setPlayerName] = useState('');
  const [tagline, setTagline] = useState('');

  return(
    <form className='form'>
      <input type='text' value={playerName} name='playerName'
        placeholder='Enter player name...' className='name-input'
        onChange={(event) => setPlayerName(event.target.value)} />
      <input type='text' value={tagline} name='tagline'
        placeholder="Enter player tagline...." className='tagline-input'
        onChange={ event => setTagline(event.target.value)} />
      <button type='button' className='submit-button' >Submit</button>
    </form>
  )
}
export default Form;
