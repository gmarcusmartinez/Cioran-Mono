import React from 'react';

interface Props {
  label: string;
}

const DatePickerComponent: React.FC<Props> = ({ label }) => {
  const [showDates, setShowDates] = React.useState(false);

  return (
    <>
      <label>
        {label}
        <span className='required'>*</span>
      </label>
      <div className='date-picker' onClick={() => setShowDates(!showDates)}>
        <div className='selected-date'>27 May 2020</div>
      </div>
      {showDates ? (
        <div className='dates'>
          <div className='month'>
            <div className='arrow prev-mth'>&lt;</div>
            <div className='mth'>July 2019</div>
            <div className='arrow next-mth'>&gt;</div>
          </div>
          <div className='calendar-days'></div>
        </div>
      ) : null}
    </>
  );
};

export default DatePickerComponent;
