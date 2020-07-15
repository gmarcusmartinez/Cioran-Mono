import React from 'react';

interface IProps {
  text: string;
  value: string | null;
}
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const TicketCol: React.FC<IProps> = ({ text, value }) => {
  return (
    <div className='ticket-display__item'>
      <span className='ticket-field-key'>{text}</span>
      <span className='ticket-field-value'>
        {value ? capitalize(value) : null}
      </span>
    </div>
  );
};
export default TicketCol;
