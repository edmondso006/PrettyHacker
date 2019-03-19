import React, { Component } from 'react';
import './App.css';
import TopStoriesContainer from './containers/TopStoriesContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      //Fix this sketchy code
      <div style={{marginTop: -25, backgroundColor: '#e2e1e0'}}>
        <Header />

        <div className="App">
          <TopStoriesContainer />
        </div>
      </div>
      
    );
  }
}

export default App;
