import React from 'react';

const Pagination = ({ spaceLaunchesPerPage, totalLaunches, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLaunches / spaceLaunchesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => {e.preventDefault(); paginate(number)}} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;