import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CHEFit</h1>
        </header>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
