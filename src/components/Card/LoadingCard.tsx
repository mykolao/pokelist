import styles from 'components/Card/Card.module.scss';
import CardImage from 'components/CardImage';

export const LoadingCard = () => (
  <li className={styles.static}>
    <div className={(styles.front, styles.rotating)}>
      <CardImage sprite={null} />
      <p className={styles.name}>Loading</p>
    </div>
  </li>
);
