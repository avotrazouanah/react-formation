import '@/styles/home.css';
import React, { FC, useEffect, useState } from 'react';
import CharacterItem from '@/common/CharacterItem';
import { getCharacters } from '@/services/api';
import { CharacterIf } from '@/types/types';
import { addFavorite, getFavorites, removeFavorite } from '@/utils/StorageService';

const Home: FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getCharacters()
      .then((dataApi: CharacterIf[]) => {
        const tmp: CharacterIf[] = dataApi;
        tmp.length = 5;
        // dataF.length = 10;
        setData(tmp);
      })
      .catch((e) => alert(e));
  }, []);

  return (
    <div className="home">
      <div className="characters">
        {data.map((item: CharacterIf, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <CharacterItem character={item} key={index} isFavoritePage={false} />
        ))}
      </div>
    </div>
  );
};

export default Home;
