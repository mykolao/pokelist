import { FC, useCallback } from 'react';

import { PaginationComponent } from 'components/Pagination/Pagination.component';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { pokemonListActions, PokemonListState } from 'store/pokemonList';

const { nextPage, previousPage } = pokemonListActions;

export const Pagination: FC = () => {
  const { filteredList, pageNumber, pageSize } = useAppSelector<PokemonListState>(
    ({ pokemonList }) => pokemonList,
  );

  const dispatch = useAppDispatch();

  const totalCount = filteredList.length;

  const isLastPage = (pageNumber + 1) * pageSize > totalCount;

  const handleNextPage = useCallback(() => dispatch(nextPage()), [nextPage]);
  const handlePreviousPage = useCallback(() => dispatch(previousPage()), [previousPage]);

  return (
    <PaginationComponent
      totalItemCount={totalCount}
      currentPage={pageNumber}
      isLastPage={isLastPage}
      onNext={handleNextPage}
      onPrevious={handlePreviousPage}
    />
  );
};
