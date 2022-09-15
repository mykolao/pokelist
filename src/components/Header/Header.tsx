import { FC } from 'react';

import styles from 'components/Header/Header.module.scss';
import Logo from 'components/Logo';
import Search from 'components/Search';

export const Header: FC = () => (
  <header className={styles.header}>
    <Logo />
    <Search />
  </header>
);
