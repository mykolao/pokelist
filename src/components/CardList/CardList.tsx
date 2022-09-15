import { FC } from 'react';

import { IPokemon } from 'api';
import Card from 'components/Card';
import styles from 'components/CardList/CardList.module.scss';
import Pagination from 'components/Pagination';

interface Props {
  pokemonList: IPokemon[];
}
export const CardList: FC<Props> = ({ pokemonList }) => (
  <div className={styles.container}>
    <Pagination />
    <ul className={styles.list}>
      {pokemonList.map(({ name }) => (
        <Card key={name} name={name} />
      ))}
    </ul>
  </div>
);
