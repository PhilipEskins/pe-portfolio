import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/navbar';
import Projects from './components/projects';
import About from './components/about';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
