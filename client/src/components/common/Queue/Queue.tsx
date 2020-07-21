import React from 'react';

interface Props {
  headers: { text: string }[];
  list: JSX.Element[] | null;
  classNames: string[];
}

const Queue: React.FC<Props> = ({ headers, list, classNames, children }) => {
  const ths = headers.map((h) => (
    <th key={h.text} className={classNames[1]}>
      {h.text}
    </th>
  ));

  const renderTable = () => (
    <table>
      <thead>
        <tr className={classNames[2]}>{ths}</tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
  return (
    <div className={classNames[0]}>
      {renderTable()}
      {children}
    </div>
  );
};

export default Queue;
