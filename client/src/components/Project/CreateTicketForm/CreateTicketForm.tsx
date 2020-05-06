import React from 'react';

const ticketTypeOptions = [
  { text: 'Feature' },
  { text: 'Bug' },
  { text: 'Test Suite' },
  { text: 'Task' },
];
const storyPointOptions = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '5' },
  { text: '8' },
  { text: '13' },
];

const CreateTicketForm = () => {
  const renderOptions = (arr: any[]) => {
    return arr.map((el) => <option>{el.text}</option>);
  };

  return (
    <form>
      <div className='form-field'>
        <label>Ticket Title</label>
        <span className='form-field__required'>*</span>
        <input type='text' />
      </div>
      <div className='form-field'>
        <label>Ticket Type</label>
        <span className='form-field__required'>*</span>
        <select>{renderOptions(ticketTypeOptions)}</select>
      </div>
      <div className='form-field'>
        <label>Story Points</label>
        <span className='form-field__required'>*</span>
        <select>{renderOptions(storyPointOptions)}</select>
      </div>
      <div className='form-field'>
        <label>Description</label>
        <textarea rows={2}></textarea>
      </div>
      <button
        className='btn-primary'
        style={{ width: '40%', alignSelf: 'flex-end' }}
      >
        Submit
      </button>
    </form>
  );
};
export default CreateTicketForm;
