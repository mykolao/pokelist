import { FC, useCallback } from 'react';

import { PaginationComponent } from 'components/Pagination/Pagination.component';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { pokemonListActions, PokemonListState } from 'store/pokemonList';

const { nextPage } = pokemonListActions;

export const Pagination: FC = () => {
  const { filteredList, pageNumber } = useAppSelector<PokemonListState>(
    ({ pokemonList }) => pokemonList,
  );

  const dispatch = useAppDispatch();

  const totalCount = filteredList.length;

  const handleNextPage = useCallback(() => dispatch(nextPage()), [nextPage]);
  const handlePrevoiusPage = useCallback(() => {}, []);

  return (
    <PaginationComponent
      totalItemCount={totalCount}
      currentPage={pageNumber}
      isLastPage={false}
      onNext={handleNextPage}
      onPrevious={handlePrevoiusPage}
    />
  );
};
