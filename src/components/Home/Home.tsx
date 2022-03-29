import '@/styles/home.css';
import React, { FC, useEffect, useState } from 'react';
import CharacterItem from '@/common/CharacterItem';
import { getCharacters } from '@/services/api';
import { CharacterIf } from '@/types/types';

const Home: FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getCharacters()
      .then((dataF) => {
        setData(dataF);
      })
      .catch((e) => alert(e));
  }, []);

  return (
    <div className="home">
      <div className="characters">
        {data.map((item: CharacterIf, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <CharacterItem character={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
