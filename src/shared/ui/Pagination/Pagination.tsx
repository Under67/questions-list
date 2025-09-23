import styles from './pagination.module.scss';
import { paginationLeft } from '@/shared/assets';
import { paginationRight } from '@/shared/assets';
import classNames from 'classnames';

interface PaginationProps {
  totalPages: number;
  page: number;
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
  onChangePage: (newPage: number) => void;
}

function Pagination({
  page,
  totalPages,
  onPrevPageClick,
  onNextPageClick,
  onChangePage,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (page > 5) {
      pages.push('...');
    }

    for (
      let i = Math.max(2, page - 3);
      i <= Math.min(totalPages - 1, page + 2);
      i++
    ) {
      pages.push(i);
    }

    if (page < totalPages - 4) {
      pages.push('...');
    }

    if (totalPages > 2) pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <div className={styles.pagination}>
      <button
        className={styles['arrow-button']}
        disabled={page === 1}
        onClick={onPrevPageClick}
      >
        <img src={paginationLeft} alt="назад" />
      </button>

      {pages.map((p, index) =>
        typeof p === 'number' ? (
          <button
            key={index}
            disabled={p === page}
            onClick={() => onChangePage(p)}
            className={classNames(styles['page-button'], {
              [styles.active]: p === page,
            })}
          >
            {p}
          </button>
        ) : (
          <span key={index} className={styles['dots']}>
            {p}
          </span>
        ),
      )}

      <button
        className={styles['arrow-button']}
        disabled={page === totalPages}
        onClick={onNextPageClick}
      >
        <img src={paginationRight} alt="вперёд" />
      </button>
    </div>
  );
}

export default Pagination;
