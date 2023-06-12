import './App.css';
import { useState } from 'react';

function App() {
  const count=0;
  return (
    <div className='App'>
      <div className='like-button'>
        <div className='heart-bg'>
          <div className='heart-icon'></div>
          </div>
          <div className='likes-amount'>
            {count}
          </div>
      </div>
    </div>
  );
} 

export default App;
