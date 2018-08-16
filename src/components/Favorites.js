import React from 'react';

const Favorites = (props) => {
  return(
    <div>
      <h4><a href={props.favorite.link} target="_blank">{props.favorite.name}</a></h4>
      <button onClick={this.handleDelete}>Delete</button>
    </div>
    )
}

export default Favorites
