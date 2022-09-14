import { FC, useEffect, useState } from 'react';

import { SearchComponent } from 'components/Search/Search.component';
import { useSearch } from 'store/hooks';

export const Search: FC = () => {
  const [value, setValue] = useSearch();
  const [localValue, setLocalValue] = useState(value);
  const interval = 250;

  useEffect(() => {
    const tId = setInterval(() => {
      if (value !== localValue) {
        setValue(localValue);
        clearInterval(tId);
      }
    }, interval);

    return () => {
      clearInterval(tId);
    };
  }, [value, localValue]);

  return <SearchComponent value={localValue} onChange={setLocalValue} />;
};
