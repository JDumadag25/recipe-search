import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class KeywordBar extends Component {

  render(){
  return(
  <div>
    <Form>
      <Form.Field>
        <label>Search By Keyword/Dish Type (i.e. pie, casserole, soup)</label>
        <br></br>
        <input onKeyUp={this.props.handleKeyword}/>
      </Form.Field>
    </Form>
  </div>
    )
  }
}

export default KeywordBar
