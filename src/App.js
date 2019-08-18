import React from 'react';
import './styles/App.scss';
import lozad from 'lozad';
import Firstview from './components/firstview';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';
import Experiences from './components/experiences';
import Contact from './components/contact';

class App extends React.Component {

  constructor() {
    super();
    this.observer = lozad();
  }

  componentDidMount() {
    this.observer.observe();
  }

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
        <Contact />
        <Resume />
      </div>
    );
  }
}

export default App;
