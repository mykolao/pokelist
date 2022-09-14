import { FC } from 'react';

import styles from 'components/Header/Header.module.scss';
import Search from 'components/Search';

export const Header: FC = () => (
  <header className={styles.header}>
    <h1>Pokelist</h1>
    <Search />
  </header>
);
