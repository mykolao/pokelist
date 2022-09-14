import { FC } from 'react';

import { useGetPokemonByNameQuery } from 'api';
import CardImage from 'components/CardImage';

interface Props {
  name: string;
}

export const Card: FC<Props> = ({ name }) => {
  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <>Placeholder</>;
  }

  const { sprites } = pokemon!;

  return (
    <li>
      <CardImage name={name} sprites={sprites} />
      <p>{pokemon!.name}</p>
    </li>
  );
};
