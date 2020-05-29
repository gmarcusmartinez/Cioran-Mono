import React from 'react';

interface PaginationProps {
  totalItems: number;
  paginate: Function;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  paginate,
}) => {
  const blockSize = 5;
  const [block, setBlock] = React.useState(0);

  const pageNums = [];
  const lastPageNumber = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= lastPageNumber; i++) pageNums.push(i);

  const blocks: any[] = [];
  while (pageNums.length) blocks.push(pageNums.splice(0, blockSize));

  const next = () => {
    if (block === blocks.length - 1) setBlock(0);
    else setBlock(block + 1);
  };

  const previous = () => {
    if (block === 0) setBlock(blocks.length - 1);
    else setBlock(block - 1);
  };

  const renderNavArrow = (arrow: any, click: any) => (
    <div className='arrow' onClick={click}>
      {arrow === 'left' ? <>&larr;</> : <>&rarr;</>}
    </div>
  );

  const renderBlock = (): any => {
    return blocks[block].map((num: number) => (
      <li key={num} onClick={() => paginate(num)}>
        {num}
      </li>
    ));
  };
  return (
    <div className='pagination'>
      {blockSize > 5 ? renderNavArrow('left', previous) : null}
      <ul>{renderBlock()}</ul>
      {blockSize > 5 ? renderNavArrow('right', next) : null}
    </div>
  );
};

export default Pagination;
