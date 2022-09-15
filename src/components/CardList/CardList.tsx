import { FC } from 'react';

import { useGetPokemonListQuery, IPokemon } from 'api';
import { CardListComponent } from 'components/CardList/CardList.component';
import { useAppSelector } from 'store/hooks';

export const CardList: FC = () => {
  const { isSuccess } = useGetPokemonListQuery();

  const list = useAppSelector<IPokemon[]>(
    ({ pokemonList: { currentPageList } }) => currentPageList,
  );

  if (!isSuccess) {
    return <main>Waiting</main>;
  }

  return (
    <main>
      <CardListComponent pokemonList={list} />
    </main>
  );
};
