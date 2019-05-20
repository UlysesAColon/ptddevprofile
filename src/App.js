import React from 'react';
import PTDLLCIcon from '../src/images/PTDLLCIcon.jpg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={PTDLLCIcon} className="App-logo box bounce-1" alt="logo" />
        <p>
         This is a page for my developer profile
        </p>
        <a
          className="App-link"
          href="https://programmedtodestroy.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to the other PTD Page
        </a>
      </header>
    </div>
  );
}

export default App;
