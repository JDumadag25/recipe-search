import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

const SearchBar = (props) => {
return(
  <div>
    <Form>
      <Form.Field>
        <label>Enter Your Ingredients (separated by commas)</label>
        <br></br>
        <input onKeyUp={props.handleSearch}/>
      </Form.Field>
    </Form>
  </div>
    )
}

export default SearchBar
