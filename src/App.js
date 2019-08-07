import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Firstview from './components/firstview';
import Navbar from './components/navbar';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Firstview />
      <Navbar />
      <Resume />
    </div>
  );
}

export default App;
