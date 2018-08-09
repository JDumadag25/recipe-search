import React from 'react';

const Favorites = (props) => {
  return(
    <h4><a href={props.favorite.link}>{props.favorite.name}</a></h4>
    )
}

export default Favorites
