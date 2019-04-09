import React from 'react';

const CharacterDetail = (props) => {
  if(!props.character) return null;
  return (
    <h3>
      Character Details
      <h3>
        Name:{props.character.name}
      </h3>
      <h3>
        House:{props.character.house}
      </h3>
    </h3>
  )
}

export default CharacterDetail;
