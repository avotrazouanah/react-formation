import '@/styles/characterItem.css';
import React from 'react';
import { PropsCharacterItemIf } from '@/types/types';

const CharacterItem = (props: PropsCharacterItemIf) => {
  const { character } = props;
  return (
    <div className="character_item card">
      <div className="img">
        <img
          src={character.image}
          alt="avatar"
          width={200}
          height={200}
          style={{ width: '100%' }}
        />
      </div>
      <div className="container">
        <h4>
          <b>{character.actor}</b>
        </h4>
        <p>{character.name}</p>
      </div>
    </div>
  );
};

export default CharacterItem;
