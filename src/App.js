import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Firstview from './components/firstview';


function App() {
  return (
    <div className="App">
      <Firstview />
    </div>
  );
}

export default App;
