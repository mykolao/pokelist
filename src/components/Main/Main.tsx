import { FC } from 'react';

import { useGetPokemonListQuery, IPokemon } from 'api';
import CardList from 'components/CardList';
import Pagination from 'components/Pagination';
import { useAppSelector } from 'store/hooks';

export const Main: FC = () => {
  const { isSuccess } = useGetPokemonListQuery();

  const list = useAppSelector<IPokemon[]>(
    ({ pokemonList: { currentPageList } }) => currentPageList,
  );

  if (!isSuccess) {
    return <main>Waiting</main>;
  }

  return (
    <main>
      <CardList pokemonList={list} />
      <Pagination />
    </main>
  );
};
