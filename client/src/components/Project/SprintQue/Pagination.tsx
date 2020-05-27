import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  paginate: Function;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  paginate,
}) => {
  const [block, setBlock] = React.useState(0);
  const blockSize = 5;

  const createBlocks = (total: number[]) => {
    const temp = [];
    while (total.length) temp.push(total.splice(0, blockSize));
    return temp;
  };

  const lastPageNumber = Math.ceil(totalItems / itemsPerPage);

  const pageNums = [];

  for (let i = 1; i <= lastPageNumber; i++) {
    pageNums.push(i);
  }

  const blocks = createBlocks(pageNums);

  const next = () => {
    if (block === blocks.length - 1) {
      setBlock(0);
    } else {
      setBlock(block + 1);
    }
  };
  const previous = () => {
    if (block === 0) {
      setBlock(blocks.length - 1);
    } else {
      setBlock(block - 1);
    }
  };
  return (
    <div className='pagination'>
      {blockSize >= 10 ? (
        <div className='arrow' onClick={previous}>
          &larr;
        </div>
      ) : null}
      <ul>
        {blocks[block].map((num) => {
          return (
            <li key={num} onClick={() => paginate(num)}>
              {num}
            </li>
          );
        })}
      </ul>
      {blockSize >= 10 ? (
        <div className='arrow' onClick={next}>
          &rarr;
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
