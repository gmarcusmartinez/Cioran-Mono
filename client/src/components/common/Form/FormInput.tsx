import React, { ChangeEvent } from 'react';

interface IProps {
  label: string;
  value: string;
  name: string;
  info?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  info,
}) => {
  return (
    <div className='form-field'>
      <label>{label}</label>
      <span className='form-field__required'>*</span>
      <input type='text' name={name} value={value} onChange={onChange} />
      <div className='form-field__info'>{info}</div>
    </div>
  );
};
