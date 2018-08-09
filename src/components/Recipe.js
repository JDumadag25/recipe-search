import React, { Component } from 'react'

class Recipe extends Component{
  render(){
    console.log(this.props)
    return(
      <div className="recipe-card">
        <h3 id="rec-title"><a href={this.props.results.href}>{this.props.results.title}</a></h3>
        <img src={this.props.results.thumbnail} alt='' width="200" height="100"/>
        <br></br>
        Ingredients: {this.props.results.ingredients}
      </div>
    )
  }
}

export default Recipe
