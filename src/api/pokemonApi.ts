import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { pokemonListActions } from '../store/pokemonList';

export interface IPokemon {
  name: string;
}

interface IPokemonList {
  count: number;
  results: IPokemon[];
}

export interface IPokemonDetails {
  name: string;
  id: number;
  order: number;
  sprites: Sprites;
}

type Sprites = {
  front_default: string;
  back_default: string;
};

const fetchBase64 = async (url: string) => {
  const res = await fetch(url);
  const blob = await res.blob();

  const reader = new FileReader();
  reader.readAsDataURL(blob);

  return new Promise<string>(resolve => {
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
  });
};

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: builder => ({
    getPokemonList: builder.query<IPokemonList, void>({
      query: () => `/?limit=2000`,
      async onQueryStarted(arg, api) {
        await api.queryFulfilled;
        const pokemonList = api.getCacheEntry().data?.results;

        if (pokemonList && pokemonList.length)
          api.dispatch(pokemonListActions.setPokemonList(pokemonList));
      },
    }),
    getPokemonByName: builder.query<IPokemonDetails, string>({
      query: name => `/${name}`,
      transformResponse: async (details: IPokemonDetails) => {
        const frontImgURL = details.sprites.front_default;
        const backImgURL = details.sprites.back_default;

        const front64 = await fetchBase64(frontImgURL);
        const back64 = await fetchBase64(backImgURL);

        return {
          ...details,
          sprites: {
            ...details.sprites,
            front_default: front64,
            back_default: back64,
          },
        };
      },
    }),
  }),
});
