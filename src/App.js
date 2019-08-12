import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Firstview from './components/firstview';
import Navbar from './components/navbar';
import Resume from './components/resume';

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
        <Resume />
      </div>
    );
  }
}

export default App;
