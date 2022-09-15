import { FC } from 'react';

import pokeball from 'assets/pokeball.svg';
import styles from 'components/CardImage/CardImage.module.scss';

interface Props {
  sprite: string | null;
}

export const CardImage: FC<Props> = ({ sprite }) => {
  if (!sprite) {
    return <img className={styles.image} src={pokeball} alt="unknown pokemon" />;
  }

  return <img className={styles.image} src={sprite} alt="pokemon" />;
};
