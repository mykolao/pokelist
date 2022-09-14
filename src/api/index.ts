import { pokemonApi } from './pokemonApi';

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;

export type { IPokemon, IPokemonDetails } from './pokemonApi';

export default pokemonApi;
