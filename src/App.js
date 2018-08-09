import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import SearchBar from './components/SearchBar'
import KeywordBar from './components/KeywordBar'
import Recipe from './components/Recipe'
import Favorites from './components/Favorites'

class App extends Component {

  constructor(props) {
    super(props);
    this.search = _.debounce(this.search, 1000);
  }

  state = {
    query: '',
    keyword: '',
    results: [],
    favorites: [],

  }

  showFavorites = () => {
    if (localStorage.getItem('favorites')){
    this.getFavorites()
  } else {
      return null
   }
  }

  handleSearch = (e) => {
    this.setState({query:e.target.value})
    this.search()
  }

  handleKeyword = (e) => {
    this.setState({keyword:e.target.value})
    this.search()
  }

  search = () => {
    this.setState({results:[]})
    console.log("Hit API");
    fetch(`http://www.recipepuppy.com/api/?i=${this.state.query}&q=${this.state.keyword}`)
      .then(res => res.json())
      .then(res => this.setState({results: res.results}))
   }

   getFavorites = () => {
     let allfaves = JSON.parse(localStorage.getItem('favorites'))
     this.setState({favorites: allfaves})
   }

  render() {
    const recipes = this.state.results.map(result => {
      return <Recipe results={result} key={result.title}/>
    })
    const faveddish = this.state.favorites.map(favorite => {
      return <Favorites favorite={favorite}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CHEFit</h1>
          <button onClick={this.showFavorites}>Show Favorites</button>
        </header>
        <SearchBar handleSearch={this.handleSearch}/>
        -OR-
        <KeywordBar handleKeyword={this.handleKeyword}/>
        {this.state.results.length > 1 ? recipes : "No recipes found"}
        <br></br>
        FAVORITES
        {faveddish}
      </div>
    );
  }
}

export default App;
