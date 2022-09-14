import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPokemon } from 'api';

export interface PokemonListState {
  fullList: IPokemon[];
  searchValue: string;
  filteredList: IPokemon[];
  pageSize: number;
  pageNumber: number;
  currentPageList: IPokemon[];
}

const initialState: PokemonListState = {
  fullList: [],
  searchValue: '',
  filteredList: [],
  pageSize: 20,
  pageNumber: 0,
  currentPageList: [],
};

const calculateCurrentPageList = (state: PokemonListState): IPokemon[] => {
  const { filteredList, pageNumber, pageSize } = state;
  const { length } = filteredList;

  const pageStart = pageNumber * pageSize;
  const pageEnd = Math.min(pageStart + pageSize, length);
  return filteredList.slice(pageStart, pageEnd);
};

const calculateFilteredList = (state: PokemonListState): IPokemon[] => {
  const { fullList, searchValue } = state;

  return fullList.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

const slice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    setPokemonList: (state, { payload }: PayloadAction<IPokemon[]>) => {
      state.fullList = payload;
      state.filteredList = payload;
      state.currentPageList = calculateCurrentPageList(state);
    },

    updateSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
      state.pageNumber = 0;
      state.filteredList = calculateFilteredList(state);
      state.currentPageList = calculateCurrentPageList(state);
    },

    nextPage: state => {
      const maxPageNumber = Math.ceil(state.filteredList.length / state.pageSize);

      if (state.pageNumber < maxPageNumber) {
        state.pageNumber += 1;
        state.currentPageList = calculateCurrentPageList(state);
      }
    },

    previousPage: state => {
      if (state.pageNumber > 0) {
        state.pageNumber -= 1;
        state.currentPageList = calculateCurrentPageList(state);
      }
    },
  },
});

export const { reducer: pokemonListReducer, actions: pokemonListActions } = slice;
