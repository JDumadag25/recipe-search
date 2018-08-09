import React, { Component } from 'react';
import Recipe from './Recipe'
import { Form } from 'semantic-ui-react'
import _ from 'lodash';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.search = _.debounce(this.search, 1000);
  }

  state = {
    query: '',
    results: [],
    fetching: false,
    lastSearch: ''
  }

  componentDidUpdate = () => {
    if (this.state.query !== this.state.lastSearch){
      this.search(this.state.query)
    }
  }

  handleSearch = (e) => {
    this.setState({query:e.target.value}, () => this.search(this.state.query))
  }


  search = (search) => {
    if(this.state.fetching === false){
    console.log(search);
    console.log("Hit API");
    this.setState({fetching:true, lastSearch: search})
    fetch(`http://www.recipepuppy.com/api/?i=${search}&q=`)
    .then(res => res.json())
    .then(res => this.setState({results: res.results, fetching:false}))
    .catch(error =>  this.setState({fetching:false}))
   }
  }

  render(){
    const recipes = this.state.results.map(result => {
      return <Recipe results={result}/>
    })
  return(
  <div>
    <Form>
      <Form.Field>
        <label>Enter Your Ingredients</label>
        <br></br>
        <input onKeyUp={this.handleSearch}/>
      </Form.Field>
    </Form>
    {recipes}
  </div>
    )
  }
}

export default SearchBar
