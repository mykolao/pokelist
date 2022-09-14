import { FC } from 'react';

import { IPokemon } from 'api';
import Card from 'components/Card';
import styles from 'components/CardList/CardList.module.scss';
import Pagination from 'components/Pagination';

interface Props {
  pokemonList: IPokemon[];
}
export const CardList: FC<Props> = ({ pokemonList }) => (
  <ul className={styles.cardList}>
    {pokemonList.map(({ name }) => (
      <Card key={name} name={name} />
    ))}
  </ul>
    <Pagination />
  </div>
);
