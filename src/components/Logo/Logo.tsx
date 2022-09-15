import { FC } from 'react';

import pokeball from 'assets/pokeball-color.svg';
import style from 'components/Logo/Logo.module.scss';

export const Logo: FC = () => (
  <div className={style.logo}>
    <img src={pokeball} alt="pokeball" />
    <h1>pokelist</h1>
  </div>
);
