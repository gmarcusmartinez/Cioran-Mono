import React from 'react';
interface TItemProps {
  text: string;
}
export const TItem: React.FC<TItemProps> = ({ text, children }) => {
  return (
    <div className='ticket-display__item'>
      <span className='ticket-field-key'>{text}</span>
      <span className='ticket-field-value'>{children}</span>
    </div>
  );
};
