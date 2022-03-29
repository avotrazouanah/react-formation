import React, { useCallback, useEffect, useState } from 'react';
import { getCharacters } from '@/services/api';

const Home = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getCharacters()
      .then((dataF) => {
        setData(dataF);
      })
      .catch((e) => alert(e));
  }, []);
  console.log(data);
  // get All character
  // const [characters, setCharacters] = useState([]);

  // const fetchCharacters = useCallback(async () => {
  //   try {
  //     const result = await getCharacters();
  //     setCharacters(result);
  //   } catch (e) {
  //     console.log(e);
  //     alert('Erreur de récupération des listes des personnage');
  //   }
  // }, []); // eslint-disable-line

  // useEffect(() => {
  //   fetchCharacters();
  // }, [fetchCharacters]);

  return (
    <div className="home">
      <p>home</p>
      <ul>
        {data.map((item: any, index: any) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
