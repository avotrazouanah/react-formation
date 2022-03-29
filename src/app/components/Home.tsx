import React, { useCallback, useEffect, useState } from 'react';
import { getCharacters } from '../provider/CharacterProvider';
import { Character } from '../types/types';

const Home = () => {
  // get All character
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = useCallback(async () => {
    try {
      const result = await getCharacters();
      setCharacters(result);
    } catch (e) {
      console.log(e);
      alert('Erreur de récupération des listes des personnage');
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div className="home">
      <p>home</p>
      {/* {characters.map((c) => c.name)} */}
    </div>
  );
};

export default Home;
