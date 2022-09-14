import { ChangeEvent, FC } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchComponent: FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label>
      Search
      <input type="search" value={value} onChange={handleChange} />
    </label>
  );
};
