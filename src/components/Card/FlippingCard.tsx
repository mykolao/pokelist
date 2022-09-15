import { FC } from 'react';

import styles from 'components/Card/Card.module.scss';
import CardImage from 'components/CardImage';

interface Props {
  name: string;
  frontSprite: string;
  backSprite: string;
}

export const FlippingCard: FC<Props> = ({ name, frontSprite, backSprite }) => (
  <li className={styles.flippable}>
    <div className={styles.front}>
      <CardImage sprite={frontSprite} />
      <p className={styles.name}>{name}</p>
    </div>
    <div className={styles.back}>
      <CardImage sprite={backSprite} />
      <p className={styles.name}>{name}</p>
    </div>
  </li>
);
