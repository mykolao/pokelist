import { FC } from 'react';

import styles from 'components/Header/Header.module.scss';
import Logo from 'components/Logo';
import Search from 'components/Search';

export const Header: FC = () => (
  <div className={styles.container}>
    <header>
      <Logo />
      <Search />
    </header>
  </div>
);
