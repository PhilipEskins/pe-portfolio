import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Firstview from './components/firstview';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';
import Experiences from './components/experiences';

class App extends React.Component {

  handleScroll(element) {
    // preventDefault();
    var scrollElement = document.getElementById(element);
    scrollElement.scrollIntoView({behavior:'smooth'});
  }

  render() {
    return (
      <div className="App">
        <Firstview onScroll={this.handleScroll} />
        <Navbar onScroll={this.handleScroll} />
        <Projects />
        <Experiences />
        <Resume />
      </div>
    );
  }
}

export default App;
