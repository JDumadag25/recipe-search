import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class SearchBar extends Component {

  render(){
  return(
  <div>
    <Form>
      <Form.Field>
        <label>Enter Your Ingredients (separated by commas)</label>
        <br></br>
        <input onKeyUp={this.props.handleSearch}/>
      </Form.Field>
    </Form>
  </div>
    )
  }
}

export default SearchBar
