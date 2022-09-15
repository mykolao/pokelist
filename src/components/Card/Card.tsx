import { FC } from 'react';

import { FlippingCard } from './FlippingCard';
import { StaticCard } from './StaticCard';

import { useGetPokemonByNameQuery } from 'api';

interface Props {
  name: string;
}

export const Card: FC<Props> = ({ name }) => {
  const { data: pokemon, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <li>Placeholder</li>;
  }

  const { sprites } = pokemon!;
  const cardName = pokemon!.name.split('-').join(' ');

  if (!sprites.front_default) {
    return <StaticCard name={cardName} />;
  }

  return (
    <FlippingCard
      name={cardName}
      frontSprite={sprites.front_default}
      backSprite={sprites.back_default}
    />
  );
};
