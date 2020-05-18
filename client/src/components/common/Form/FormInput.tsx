import React, { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  info?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
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
