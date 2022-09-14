import { FC, memo } from 'react';

import styles from './Pagination.module.scss';

interface Props {
  totalItemCount: number;
  currentPage: number;
  isLastPage: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const PaginationComponent: FC<Props> = memo(
  ({ totalItemCount, currentPage, onNext, isLastPage, onPrevious }) => (
    <section className={styles.pagination}>
      <p>{totalItemCount} Pokemons</p>
      <div className={styles.controls}>
        <button disabled={!currentPage} onClick={onPrevious} type="button">
          &#60;
        </button>
        <p>{currentPage + 1}</p>
        <button disabled={isLastPage} onClick={onNext} type="button">
          &#62;
        </button>
      </div>
    </section>
  ),
);
