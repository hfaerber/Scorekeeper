import React, {useState, useEffect} from 'react';
import './PlayerCard.css';

const PlayerCard = ({ name, tagline }) => {
  const [score, setScore] = useState(0);

  const award = () => {
    setScore(prevScore => prevScore +1)
  }

  const revoke = () => {
    setScore(prevScore => prevScore - 1)
  }

  return(
    <div className='test'>
      <h2 className='score'>{score}</h2>
      <h2 className='player-name'>{name}</h2>
      <p className='tagline'>"{tagline}"</p>
      <button className='award-button' onClick={award}>Award Point</button>
      <button className='revoke-button' onClick={revoke}>Revoke Point</button>
    </div>
  )
}

export default PlayerCard;
