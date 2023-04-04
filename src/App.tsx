import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume/Resume'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Resume name="Agustin Alexander"></Resume>
      </header>
    </div>
  );
}

export default App;
