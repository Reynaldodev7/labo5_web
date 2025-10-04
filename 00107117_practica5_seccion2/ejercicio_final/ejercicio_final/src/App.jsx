import React from 'react';
import CientificoCard from './CientificoCard';
import { cientificosNotables } from './cientificos';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Científicos Notables</h1>
      <div className="cards-container">
        {}
        {cientificosNotables.map((cientifico) => (
          <CientificoCard 
            key={cientifico.id} 
            cientifico={cientifico} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
