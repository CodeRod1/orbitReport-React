import React from 'react';
import satData from './satData';
import './styling.css';

function Buttons({ filterByType, setSat, displaySats }) {
    return (
    <div className='flex-container'>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      
      <button onClick={() => setSat(satData)}>
        All orbit
      </button>
    </div>
  );
}

export default Buttons;