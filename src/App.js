import React from 'react';
import Profile_Photo from '../src/images/Profile_Photo.jpg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fadebox from './components/Fadebox/Fadebox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={Profile_Photo} className="App-logo box bounce-1" alt="logo" />
        <p>
         This is a page for my developer profile
        </p>
        <div>
        Click button to see current sites
          <Fadebox />
        </div>
      </header>
    </div>
  );
}

export default App;
