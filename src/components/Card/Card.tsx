import { FC } from 'react';

import { useGetPokemonByNameQuery } from 'api';
import styles from 'components/Card/Card.module.scss';
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
  const cardName = pokemon!.name.split('-').join(' ');

  if (!sprites.front_default) {
    return (
      <li className={styles.static}>
        <div className={styles.front}>
          <CardImage sprite={sprites.front_default} />
          <p className={styles.name}>{cardName}</p>
        </div>
      </li>
    );
  }

  return (
    <li className={styles.flippable}>
      <div className={styles.front}>
        <CardImage sprite={sprites.front_default} />
        <p className={styles.name}>{cardName}</p>
      </div>
      <div className={styles.back}>
        <CardImage sprite={sprites.back_default} />
        <p className={styles.name}>{cardName}</p>
      </div>
    </li>
  );
};
