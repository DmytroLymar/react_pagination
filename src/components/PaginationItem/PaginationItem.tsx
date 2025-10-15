import React from 'react';
import cn from 'classnames';

type Props = {
  pageNum: number;
  isCurrent: boolean;
  onPageChange: (page: number) => void;
};

export const PaginationItem: React.FC<Props> = ({
  pageNum,
  isCurrent,
  onPageChange,
}) => {
  return (
    <li className={cn('page-item', { active: isCurrent })}>
      <a
        data-cy="pageLink"
        className="page-link"
        href={`#${pageNum}`}
        onClick={() => {
          onPageChange(pageNum);
        }}
      >
        {pageNum}
      </a>
    </li>
  );
};
