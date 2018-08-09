import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

const KeywordBar = (props) => {
return(
  <div>
    <Form>
      <Form.Field>
        <label>Search By Keyword/Dish Type (i.e. pie, casserole, soup)</label>
        <br></br>
        <input onKeyUp={props.handleKeyword}/>
      </Form.Field>
    </Form>
  </div>
    )
}

export default KeywordBar
