import React from 'react';

interface IProps {
  text: string | HTMLElement;
  className: string;
  cb: Function;
}
const CustomBtn: React.FC<IProps> = ({ text, className, cb }) => {
  let symbol = null;
  if (text === 'left') symbol = <>&larr;</>;
  else if (text === 'right') symbol = <>&rarr;</>;
  else symbol = text;

  return (
    <div className={className} onClick={() => cb()}>
      {symbol}
    </div>
  );
};

export default CustomBtn;
