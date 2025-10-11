import cn from 'classnames';
import React from 'react';

type Props = {
  total: number;
  itemsPerPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  itemsPerPage,
  currentPage = 1,
  onPageChange,
}) => {
  const pageCount = Math.max(1, Math.ceil(total / itemsPerPage));
  const canNext = currentPage < pageCount;
  const canPrev = currentPage > 1;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const onSelectPage = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  return (
    <ul className="pagination">
      <li className={cn('page-item', { disabled: !canPrev })}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={!canPrev}
          onClick={event => {
            event.preventDefault();
            onSelectPage(currentPage - 1);
          }}
        >
          «
        </a>
      </li>
      {pages.map(page => {
        const isCurrent = page === currentPage;

        return (
          <li key={page} className={cn('page-item', { active: isCurrent })}>
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${page}`}
              onClick={event => {
                event.preventDefault();
                onSelectPage(page);
              }}
            >
              {page}
            </a>
          </li>
        );
      })}
      <li className={cn('page-item', { disabled: !canNext })}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={!canNext}
          onClick={event => {
            event.preventDefault();
            onSelectPage(currentPage + 1);
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
