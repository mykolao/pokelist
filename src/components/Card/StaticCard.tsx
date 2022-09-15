import { FC } from 'react';

import styles from 'components/Card/Card.module.scss';
import CardImage from 'components/CardImage';

interface Props {
  name: string;
}

export const StaticCard: FC<Props> = ({ name }) => (
  <li className={styles.static}>
    <div className={styles.front}>
      <CardImage sprite={null} />
      <p className={styles.name}>{name}</p>
    </div>
  </li>
);
