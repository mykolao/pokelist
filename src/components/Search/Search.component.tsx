import { ChangeEvent, FC } from 'react';

import styles from 'components/Search/Search.module.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchComponent: FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.search}
      type="search"
      value={value}
      onChange={handleChange}
      placeholder="Find"
      maxLength={12}
    />
  );
};
