import { FC } from 'react';

import { useGetPokemonByNameQuery } from 'api';
import CardImage from 'components/CardImage';

interface Props {
  name: string;
}

export const Card: FC<Props> = ({ name }) => {
  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <li>Placeholder</li>;
  }

  const { sprites } = pokemon!;

  return (
    <li>
      {sprites.front_default ? <CardImage name={name} sprites={sprites} /> : <p>?</p>}
      <p>{pokemon!.name}</p>
    </li>
  );
};
