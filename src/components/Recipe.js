import React, { Component } from 'react'

class Recipe extends Component{

  save = (e) => {
    let recipeName = e.target.value
    let recipeLink = e.target.id
    let existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    let faved = {
      'name' : recipeName,
      'link' : recipeLink
    }
    localStorage.setItem('faved', JSON.stringify(faved))
    existingFavorites.push(faved)
    localStorage.setItem("favorites", JSON.stringify(existingFavorites))
  }

  render(){
    return(
      <div className="recipe-component">
        <h3 id="title"><a href={this.props.results.href}>{this.props.results.title}</a></h3>
        <img src={this.props.results.thumbnail} alt='' width="200" height="100"/>
        <br></br>
        Ingredients: {this.props.results.ingredients}
        <br></br>
        <button onClick={this.save} value={this.props.results.title} id={this.props.results.href}>Save</button>
      </div>
    )
  }
}

export default Recipe
